import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('Check card add', async () => {
    render(<FormPage />);

    const form = screen.getByTestId('formAddCard');
    const title = screen.getByRole('textbox', {
      name: 'Title: Description: Language: JavaScript',
    });
    const description = screen.getByRole('textbox', { name: '' });
    const format = screen.getAllByRole('radio');
    const date = screen.getByTestId('input-date');
    const icon = screen.getByTestId('input-file');
    const agreement = screen.getByRole('checkbox');
    const mockFile = new File(['JS'], 'book.png', {
      type: 'image/png',
    });
    const dateExample = '2022-09-09';

    await waitFor(() => userEvent.type(title, 'JS'));
    await waitFor(() => userEvent.type(description, 'about every feature'));
    await waitFor(() => userEvent.clear(date));
    await waitFor(() => userEvent.type(date, dateExample));
    await waitFor(() => userEvent.click(format[0]));
    await waitFor(() => userEvent.click(agreement));
    await waitFor(() =>
      fireEvent.change(icon, {
        target: { files: [mockFile] },
      })
    );

    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
