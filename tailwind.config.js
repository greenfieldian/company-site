module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#FFFFFF',
      'light-gray': '#F2F5F8',
      'blue': '#064862',
      'blue-500': '#000622',
      'blue-300': '#020d32',
      'accent': '#17BDB4',
      'doughnuts-cream': '#fffcf6',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
