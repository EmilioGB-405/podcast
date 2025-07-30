import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/about.html'),
        blog: resolve(__dirname, 'blog/blog.html'),
        contact: resolve(__dirname, 'contactFile/contact.html'),
        episode: resolve(__dirname, 'episodes/episodes.html')
      }
    }
  }
})

