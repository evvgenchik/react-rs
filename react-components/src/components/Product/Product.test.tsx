import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Product from './Product/Product';
import books from '../data/books';

describe('Product', () => {
  it('Renders catalog component', () => {
    render(<Product book={books[0]} />);
    const item = screen.getByRole('listitem', {});
    expect(within(item).getByRole('img')).toBeInTheDocument();
  });
});
