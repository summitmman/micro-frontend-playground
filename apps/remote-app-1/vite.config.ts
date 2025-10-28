import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteapp1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx'
      },
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
      },
      dts: true,
    })
  ],
  server: {
    port: 5174
  }
})
