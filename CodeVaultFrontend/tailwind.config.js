/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        'primary-dark': '#0056b3', // Darker shade of primary color
        secondary: '#343a40',
        accent: '#28a745',
        'accent-dark': '#218838', // Darker shade of accent color
        background: '#f8f9fa',
        highlight: '#ffc107',
      },
    },
  },
  plugins: [],
}

