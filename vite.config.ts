import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  define: {
    BUILD_TIMESTAMP: JSON.stringify(new Date().toDateString()),
  },
})
