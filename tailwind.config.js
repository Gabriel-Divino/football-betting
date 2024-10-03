/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Certifique-se de incluir todos os arquivos HTML e TypeScript do Angular.
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Adicione o plugin daisyUI aqui
  ],

  daisyui: {
    themes: ["night"],
  },
}

