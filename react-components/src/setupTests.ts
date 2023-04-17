import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './testServer.test';

window.URL.createObjectURL = () => {
  return '';
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
