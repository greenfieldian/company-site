module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#2c2d36',
      'night': '#000000',
      'light-gray': '#F2F5F8',
      'light-grey': 'rgba(0, 0, 0, 0.2)',
      'light-blue': '#f3f7fb',
      'dark-gray': '#636363',
      'background-gray': '#f5f5f5',
      'blue': '#071133',
      'blue-500': '#000622',
      'blue-300': '#020d32',
      'accent': '#000ee6',
      'border': '#cccffa',
      'doughnuts-cream': '#fffcf6',
      'doughnuts-green': '#8cc63f',
      'travel-teal': '#54807B',
      'worley-light': '#f4f2ed',
      'worley-dark': '#926e5a',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
