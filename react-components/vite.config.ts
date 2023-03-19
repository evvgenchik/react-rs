/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['**/*.{test,spec}.{jsx,tsx}'],
    exclude: ['types.tsx, main.tsx, data'],
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true, // or 'istanbul'
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
      exclude: [
        ...configDefaults.coverage.exclude,
        'src/main.tsx',
        'src/utils/types.tsx',
      ],
    },
  },
});
