import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import Markdown, {meta} from 'vite-plugin-md'
import generateSitemap from 'vite-plugin-pages-sitemap'
import Layouts from 'vite-plugin-vue-layouts';
import Prism from 'markdown-it-prism'
import Inspector from "vite-plugin-vue-inspector"

const hostname = 'http://localhost:3000/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }), 
    pages({
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname })),
      extensions: ['vue', 'md'],
    }),
    Markdown({
      headEnabled: true,
      builders: [meta()],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      }
    }),
    Layouts(),
    Inspector({
      enabled: false
    })
  ]
})
