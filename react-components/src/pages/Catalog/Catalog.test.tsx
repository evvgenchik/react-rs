import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import Catalog from './Catalog';

describe('Catalog', () => {
  it('Renders Catalog component', async () => {
    render(<Catalog />);
    await waitFor(() => {
      const items = screen.getAllByRole('link', {});
      expect(items.length).toBeGreaterThanOrEqual(1);
    });
  });
  it('Renders Catalog component', async () => {
    render(<Catalog />);
    await waitFor(() => {
      const items = screen.getAllByRole('lin', {});
      expect(items.length).toBeGreaterThanOrEqual(1);
    });
  });
  it('Search specific book', async () => {
    const onSubmit = vi.fn();
    render(<Catalog />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.type(input, 'js');
    await waitFor(() => fireEvent.submit(input));
    expect(screen.getByText('Python')).not.toBeInTheDocument();
  });
});
