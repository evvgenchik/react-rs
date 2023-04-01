/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

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
      exclude: ['src/main.tsx', 'src/utils/types.tsx'],
    },
  },
});
