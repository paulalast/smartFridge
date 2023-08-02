/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#6ab175",
				mainTransparent: "#69b07399",
				dark: "#0b0b0b",
				white: "#ffffff",
			},
			fontFamily: {
				titleFont: ["DM Serif Display", "serif"],
				textFont: ["Ysabeau Infant", "sans-serif"],
			},
		},
	},
	plugins: [],
}
