import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Renders Form component', async () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Show error messages', async () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);
    const form = screen.getByTestId('formAddCard');
    const errorMessage = 'Please add image';
    fireEvent.submit(form);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
