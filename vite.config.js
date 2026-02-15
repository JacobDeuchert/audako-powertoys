import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { build as esbuild } from 'esbuild'
import { existsSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const inlineContentScript = ({ isDebug } = { isDebug: false }) => ({
  name: 'inline-content-script',
  apply: 'build',
  async closeBundle() {
    const targets = [
      join(__dirname, 'dist', 'build', 'content.js'),
      join(__dirname, 'dist', 'build', 'injected-scripts.js')
    ]

    for (const target of targets) {
      if (!existsSync(target)) {
        console.warn(`[inline-content-script] Could not find ${target} to inline`)
        continue
      }

      await esbuild({
        entryPoints: [target],
        outfile: target,
        bundle: true,
        format: 'iife',
        target: 'es2020',
        platform: 'browser',
        allowOverwrite: true,
        logLevel: 'silent',
        minify: false,
        sourcemap: isDebug ? 'inline' : false,
        keepNames: isDebug,
        loader: {
          '.css': 'empty'
        }
      })
    }
  }
})

export default defineConfig(({ mode }) => {
  const isDebug = mode === 'debug'

  return {
    plugins: [
      svelte({
        emitCss: false,
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/*',
            dest: 'assets'
          }
        ]
      }),
      inlineContentScript({ isDebug })
    ],
    server: {
      port: 3000,
      open: true
    },
    build: {
      rollupOptions: {
        input: {
          popup: resolve(__dirname, 'src/popup/popup.ts'),
          content: resolve(__dirname, 'src/content/content.ts'),
          background: resolve(__dirname, 'src/background.ts'),
          'injected-scripts': resolve(__dirname, 'src/content/injected-scripts/main.ts')
        },
        output: {
          entryFileNames: 'build/[name].js',
          chunkFileNames: 'build/[name].[hash].js',
          assetFileNames: 'build/[name].[ext]',
          format: 'es' // ES modules for all scripts including service worker
        }
      },
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: isDebug ? 'inline' : false,
      minify: isDebug ? false : 'esbuild',
      cssMinify: isDebug ? false : true,
      target: 'es2020'
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.svelte'],
      dedupe: ['svelte']
    },
    optimizeDeps: {
      exclude: ['@audako/chat-ui']
    }
  }
})
