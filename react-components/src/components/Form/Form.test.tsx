import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('Renders Form component', () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Show error messages', () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);
    const form = screen.getByTestId('formAddCard');
    const errorMessage = 'Please add image';
    fireEvent.submit(form);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('Check file format', async () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);
    const form = screen.getByTestId('formAddCard');
    const fileInput = screen.getByTestId('input-file');
    const errorMessage = 'Please add correct image format';
    const mockFile = new File(['JS'], 'book.txt', {
      type: 'text/txt',
    });
    waitFor(() =>
      fireEvent.change(fileInput, {
        target: { files: [mockFile] },
      })
    );
    waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('Validation inputs and handleSubmit', async () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);

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
    expect(onSubmit).toHaveBeenCalled();
  });
});
