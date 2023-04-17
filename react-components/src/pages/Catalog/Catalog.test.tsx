import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Catalog from './Catalog';
import { rest, server } from '../../testServer.test';
import renderWithProviders from '../../utils/utils-for-tests';

describe('Catalog', () => {
  it('Renders Catalog component', async () => {
    renderWithProviders(<Catalog />);
    await waitFor(() => {
      const items = screen.getAllByRole('link', {});
      expect(items.length).toBeGreaterThanOrEqual(1);
    });
  });
  it('Test api search specific book', async () => {
    renderWithProviders(<Catalog />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.type(input, 'js');
    await waitFor(() => fireEvent.submit(input));
    expect(screen.getByText('JS')).toBeInTheDocument();
  });
  // it('Show error on invalid request', async () => {
  //   server.use(
  //     rest.get(
  //       'https://json-server-production-2471.up.railway.app/books',
  //       (_, res, ctx) => {
  //         return res(ctx.status(404));
  //       }
  //     )
  //   );
  //   renderWithProviders(<Catalog />);
  //   const input: HTMLInputElement = screen.getByRole('textbox');
  //   await userEvent.type(input, 'js');
  //   await waitFor(() => fireEvent.submit(input));
  //   expect(
  //     screen.getByText('Sorry, but something went wrong.')
  //   ).toBeInTheDocument();
  // });
});
