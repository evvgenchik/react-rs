import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

window.URL.createObjectURL = () => {
  return '';
};

expect.extend(matchers);
