/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#6ab175",
				dark: "#0b0b0b",
				white: "#ffffff",
			},
			fontFamily: {
				textFont: ["Anek Gurmukhi", " sans-serif"],
				titleFont: ["DM Serif Display", "serif"],
			},
		},
	},
	plugins: [],
}
