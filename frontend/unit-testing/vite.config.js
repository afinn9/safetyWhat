import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },

  // moduleNameMapper: {
  //   '^@preact/signals-react$': './__mock__/@preact/signals-react.js',
  // },
});
