/** @type {import('tailwindcss').Config} */
module.exports = {

	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			berry: '#A45693',
			purple:'#9d6eda',
			offwhite:'#d7d9db',
			blush: '#F1E9EE',
			black: '#000000',
			mauve: '#C092B2',
			white: '#FFFFFF',
			darkwhite: '#f9fafb',
			darkwhite2: '#f3f4f6',
			darkwhite3: '#e5e7eb',
			gray: '#808080',
			'pearly purple': '#AD6EA1',
		},

		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			spacing:{
				'2': '8px',
			},
			textAlign: {
				left: 'left',
				center: 'center',
				right: 'right',
				justify: 'justify',
			  },
			  flexDirection: {
				'col': 'column',
			  },
		},
	},
	plugins: [],
}

  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      berry: "#A45693",
      blush: "#F1E9EE",
      black: "#000000",
      mauve: "#C092B2",
      white: "#FFFFFF",
      darkwhite: "#f9fafb",
      darkwhite2: "#f3f4f6",
      darkwhite3: "#e5e7eb",
      gray: "#808080",
      "pearly purple": "#AD6EA1",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

