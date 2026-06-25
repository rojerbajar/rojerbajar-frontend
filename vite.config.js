import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Rojer Bajar',
        short_name: 'RojerBajar',
        description: 'Online Grocery Store',
        theme_color: '#ffffff', // এখানে সাদা রঙ দেওয়া হলো
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/logo-192.webp',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'any maskable' 
          },
          {
            src: '/logo-512.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0'
  }
})