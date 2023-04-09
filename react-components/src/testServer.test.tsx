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
  rest.get(
    'https://json-server-production-2471.up.railway.app/books',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleBook));
    }
  )
);
it('');
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
