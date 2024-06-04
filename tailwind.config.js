import flowbitePlugin from 'flowbite/plugin';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {},
  plugins: [
    flowbitePlugin
  ]
}

