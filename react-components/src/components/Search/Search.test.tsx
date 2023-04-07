import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search', () => {
  it('Get data from LocalStorage after unmount', async () => {
    const onSubmit = vi.fn();
    render(<Search setBooks={onSubmit} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.type(input, 'some book');
    await fireEvent.submit(input);
    expect(localStorage.getItem('search')).toStrictEqual('some book');
  });
});
