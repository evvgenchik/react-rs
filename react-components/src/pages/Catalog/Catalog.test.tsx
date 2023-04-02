import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Catalog from './Catalog';
import books from '../../data/booksDB.json';

// describe('Catalog', () => {
//   it('Renders Catalog component', () => {
//     render(<Catalog />);
//     const items = screen.getAllByRole('listitem', {});
//     expect(items).toHaveLength(books.length);
//   });
// });
