import { defineConfig } from '@solidjs/start/config'
import devtools from 'solid-devtools/vite'

export default defineConfig({
  vite: {
    plugins: [
      devtools({
        /* features options - all disabled by default */
        autoname: true, // e.g. enable autoname
      }),
    ],
  },
  server: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/publications',
        '/students',
        '/vita',
        '/en/about',
        '/en/publications',
        '/en/students',
        '/en/vita',
        '/zh/about',
        '/zh/publications',
        '/zh/students',
        '/zh/vita',
      ],
    },
  },
})
