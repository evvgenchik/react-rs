import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Renders Form component', async () => {
    const onSubmit = vi.fn();
    render(<Form addCard={onSubmit} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
