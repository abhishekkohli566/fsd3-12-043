# Frontend usig react
## Create react project 
 ```
 1. cd frontend ## goto frontend folder(should be in small case) folder
 2. npm create vite@latest #press y if asked to install
 3.prss . to as project name 
 4. select react as framework
 5. sleect javascript as varient
 6. selsct ESlint as linter
 7. select yes and continue

 ```

 ## Add Tailwind for UI
 ```
 1. goto https://tailwindcss.com/
 2. click on get started
 3. stop the frontend by ctrl+c(install by
 > npm install tailwindcss @tailwindcss/vite`
 4. open vite.config.js then add dependency
 (
    import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindxss from "tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

 )
 5. open index.css and remove all content 
 6. delete app.css
 ```