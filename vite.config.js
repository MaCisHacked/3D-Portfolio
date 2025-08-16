import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to '/your-repo-name/' if deploying to a project page on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
