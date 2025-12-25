
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load all environment variables from the system (Vercel) and .env files
  // The third argument '' allows loading variables without the VITE_ prefix
  // Fix: Property 'cwd' does not exist on type 'Process'. Casting to any for compatibility in all build environments.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // This explicitly replaces "process.env.API_KEY" in your code 
      // with the actual key value during the build process.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
