import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Keeps it on the port you're used to
  },
  build: {
    outDir: 'build', // Matches CRA's output folder for Vercel compatibility
  }
});