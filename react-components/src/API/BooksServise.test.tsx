import { describe, it, expect } from 'vitest';
import { rest, server } from '../testServer.test';
import BooksServise from './BooksServise';

describe('BooksServise', () => {
  it('Api getAll request', async () => {
    const books = await BooksServise.getAll();
    expect(books.length).toBeGreaterThanOrEqual(1);
  });
  it('Api throw an error', async () => {
    server.use(
      rest.get('http://localhost:3333/books', (_, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    expect(BooksServise.getAll()).rejects.toThrow('Status code error: 404');
  });
});
