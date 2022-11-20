import { resolve } from "path"
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Proxying websockets or socket.io
      '/socket.io': {
        target: 'ws://localhost:9000',
        ws: true
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
