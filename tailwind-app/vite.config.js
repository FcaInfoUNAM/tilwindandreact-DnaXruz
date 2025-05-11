import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // agrega esta linea


// https://vite.dev/config/
export default defineConfig({
  plugins: [    tailwindcss(),// agrega tailwind al array de plugings
react()],
})
