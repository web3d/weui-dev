
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: resolve('./', 'public/images'),
                    dest: ''
                },
                {
                    src: resolve('./', 'node_modules/weui/dist/'),
                    dest: '',
                    rename: 'weui',
                },
            ]
        })
    ]
})
