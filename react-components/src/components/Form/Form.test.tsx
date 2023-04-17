import { describe, it, expect, vi } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import fillForm from '../../pages/FormPage/FormPage.test';
import renderWithProviders from '../../utils/utils-for-tests';

describe('Form', () => {
  const reactRedux = { useDispatch, useSelector };

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
  it('Validation inputs and handleSubmit', async () => {
    const onSubmit = vi.fn();
    renderWithProviders(<Form />);
    const useDispatchMock = vi.spyOn(reactRedux, 'useDispatch');
    useDispatchMock.mockReturnValue(onSubmit());
    const form = screen.getByTestId('formAddCard');
    await fillForm();

    await waitFor(() => fireEvent.submit(form));
    expect(onSubmit).toHaveBeenCalled();
  });
});
