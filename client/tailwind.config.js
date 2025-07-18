export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lotr: ['"MedievalSharp"', 'cursive']
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
