/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown1" : "#9C6644",
        "brown" : "#DDB892",
        "brown3" : "#7F5539",
        "brown4" : "#B08968",
        "nude" : "#EDE0D4",
        "nude1" : "#E6CCB2",
        "primary" : "#FAFAFA",
        "secondary" : "#555",
      },
      fontFamily: {
        "primary" : ["Roboto Flex", "sans-serif"],
        "secondary" : ["Lora", "serif"],
        "lobster" : ["Lobster Two", "sans-serif"],
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
}

