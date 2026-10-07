import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base:"/Room-homepage-from-frontend-mentor/",
    plugins: [
        tailwindcss(),
    ],
})