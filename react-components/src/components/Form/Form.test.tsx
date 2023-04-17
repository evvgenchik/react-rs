import { describe, it, expect } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import renderWithProviders from '../../utils/utils-for-tests';

describe('Form', () => {
  it('Renders Form component', () => {
    renderWithProviders(<Form />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Show error messages', async () => {
    renderWithProviders(<Form />);
    const form = screen.getByTestId('formAddCard');
    const errorMessage = 'Title is require';
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('Check file format', async () => {
    renderWithProviders(<Form />);
    const form = screen.getByTestId('formAddCard');
    const fileInput = screen.getByTestId('input-file');
    const errorMessage = 'Please add correct image format';
    const mockFile = new File(['JS'], 'book.txt', { type: 'book/txt' });
    await waitFor(async () => {
      await userEvent.upload(fileInput, mockFile);
    });
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
