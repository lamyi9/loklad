/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors:{
        brownDark: "#944343",
        brown : "#c55959",
        brownLight : "#d48383",
        
      }
    },
   
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],

}

