import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import preact from '@astrojs/preact'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

import Pinegrow from '@pinegrow/astro-module'
import { fileURLToPath, URL } from 'node:url'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/astro'
import Unocss from 'unocss/astro'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'
// import myAstroModule from './src/modules/my-module'

// https://astro.build/config
export default defineConfig({
  integrations: [
    // myAstroModule,
    vue({
      appEntrypoint: '/src/app',
    }),
    Pinegrow({
      liveDesigner: {
        iconPreferredCase: 'unocss',
        // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtools', // see app.ts
        // see app.ts
        tailwindcss: {
          configPath: 'tailwind.config.ts',
          cssPath: '@/assets/css/tailwind.css',
        },
        // plugins: [
        //   {
        //     name: 'My Awesome Lib 3.0',
        //     key: 'my-awesome-lib',
        //     pluginPath: fileURLToPath(
        //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
        //     ),
        //   },
        // ],
      },
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    react(),
    preact(),
    svelte(),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
    }),
    mdx(),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /.vue$/,
        /.vue?vue/, // .vue
        /.md$/, // .md
        /.mdx$/, // .mdx
      ],
      imports: [
        'vue',
        // 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        'src/composables',
        'src/utils',
        'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
  ],
  vite: {
    plugins: [
      // Update config as per your needs
      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        dirs: ['src/components'],

        // allow auto load markdown components under ./src/components/
        // extensions: ['vue', 'jsx', 'tsx', 'js', 'ts', 'mdx', 'svelte']
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        // include: [/\.vue$/, /\.vue\?vue/, /\.mdx?/]
        include: [/.vue$/, /.vue?vue/, /.md$/],

        // resolvers: [], // Auto-import using resolvers

        // transformer: 'vue3',

        dts: 'components.d.ts',
      }),
      // VueDevTools()
    ],
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
