import flowbitePlugin from 'flowbite/plugin';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        zinc: "#101010",
        dark: "#161617",
        darkGray: "#1c1c1df7",
      },
    },
  },
  plugins: [
    flowbitePlugin
  ]
}

