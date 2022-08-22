/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			minHeight: {
				'55vh': '55vh',
			},
			padding: {
				'20px 10px': '20px 10px',
			},
			margin: {
				'50px': '50px',
			},
		},
	},
	plugins: [],
};
