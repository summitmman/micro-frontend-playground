import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'hostapp',
      remotes: {
        'remoteapp1': {
          type: 'module',
          name: 'remoteapp1',
          entry: 'http://localhost:5174/remoteEntry.js'
        },
        'remoteapp2': {
          type: 'module',
          name: 'remoteapp2',
          entry: 'http://localhost:4201/remoteEntry.js'
        }
      },
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
      },
      dts: true
    })
  ],
  server: {
    port: 5173
  }
})
