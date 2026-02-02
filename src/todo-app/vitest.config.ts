import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom', // or 'happy-dom'
    setupFiles: [], // optional, if you need a setup file
    include: ['../../tests/unit/frontend/**/*.test.ts'], // Point to the root tests directory
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
