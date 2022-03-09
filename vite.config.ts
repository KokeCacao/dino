import { resolve } from 'path'
import {defineConfig, loadEnv} from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  // root,
  resolve: {
    alias: {
    },
  },
  // build: {
  //   outDir,
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       main: resolve(root, 'index.html')
  //     }
  //   },
  // }
})