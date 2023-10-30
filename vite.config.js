import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/timebreaker-life-counter',
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'images',
          dest: ''
        },
        {
          src: 'fonts',
          dest: 'assets'
        }
      ]
    })
  ],
})
