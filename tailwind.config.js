/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors:{
        brownDark: "#944343",
        brown : "#c55959",
        brownLight : "#d48383",
        flowbiteTab: {
          active: '#D61F69', // Custom active color
          inactive: '#0E9F6E', // Custom inactive color
          focus: '#C27803',
        },
      },
      fontFamily:{
        'bo': ['bo']
      },
      
    },
   
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],

}

