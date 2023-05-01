import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { it } from 'vitest';

const exampleBook = [
  {
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
  },
];

const server = setupServer(
  rest.get('http://localhost:3333/books', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(exampleBook));
  })
);
it('');

export { server, rest };
