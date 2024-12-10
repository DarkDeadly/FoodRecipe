import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server :  {
    port : 5173,
    proxy : {
    "/users/register" : "http://localhost:5000/",
    "/users/login" : "http://localhost:5000/"
    }
  }
})
