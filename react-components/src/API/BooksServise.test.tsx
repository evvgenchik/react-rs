import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { setupServer, rest } from 'msw/node';
import fetch from 'cross-fetch'; // <-- this is what it mea
import BooksServise from './BooksServise';

const exampleBook = {
  title: 'JS',
  description: 'OOP',
  isbn13: '123',
  price: '$333',
  icon: 'https://itbook.store/img/books/9781098103828.png',
  url: 'https://itbook.store/books/9781098103828',
  date: '12.12.1998',
  agreement: true,
  format: 'PDF',
  language: 'JavaScript',
};

// describe('BooksServise', () => {
//   it('Get all data', () => {});
// });
