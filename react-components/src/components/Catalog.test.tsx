import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Catalog from './Catalog';
import books from '../data/books';

describe('Catalog', () => {
  it('Renders catalog component', () => {
    render(<Catalog />);
    const items = screen.getAllByRole('listitem', {});
    expect(items).toHaveLength(books.length);
  });
});
