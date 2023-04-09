import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Product from './Product';
import booksJson from '../../data/booksDB.json';

describe('Product', () => {
  it('Renders catalog component', () => {
    const cardClickHandler = vi.fn();
    render(
      <Product cardClickHandler={cardClickHandler} book={booksJson.books[0]} />
    );
    const item = screen.getByRole('listitem', {});
    expect(within(item).getByRole('img')).toBeInTheDocument();
  });
});
