import { describe, it, expect, vi } from 'vitest';
import * as reactRedux from 'react-redux';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from './FormPage';
import renderWithProviders from '../../utils/utils-for-tests';

const fillForm = async () => {
  const title = screen.getByRole('textbox', {
    name: 'Title:',
  });
  const description = screen.getByRole('textbox', { name: 'Description:' });
  const format = screen.getAllByRole('radio');
  const date = screen.getByTestId('input-date');
  const icon = screen.getByTestId('input-file');
  const agreement = screen.getByRole('checkbox');
  const mockFile = new File(['JS'], 'book.png', { type: 'image/png' });
  const dateExample = '2022-09-09';

  await waitFor(async () => {
    await userEvent.type(title, 'JS');
    await userEvent.type(description, 'about every feature');
    await userEvent.clear(date);
    await userEvent.type(date, dateExample);
    await userEvent.click(format[0]);
    await userEvent.click(agreement);
    await userEvent.upload(icon, mockFile);
  });
};

describe('FormPage', () => {
  it('Check card add', async () => {
    renderWithProviders(<FormPage />);
    const form = screen.getByTestId('formAddCard');
    await fillForm();
    await waitFor(() => fireEvent.submit(form));
    const card = screen.getByRole('listitem');
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(1);
    expect(card).toBeInTheDocument();
  });
});

export default fillForm;
