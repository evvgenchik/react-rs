import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('Catalog', () => {
  it('About', async () => {
    render(<About />);
    screen.getByText(
      'ITBookshop an online bookshop with a mission to increase developers level.'
    );
  });
});
