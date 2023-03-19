/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['**/*.{test,spec}.{jsx,tsx}'],
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true, // or 'istanbul'
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
    },
  },
});
