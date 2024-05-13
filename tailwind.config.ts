import type { Config } from 'tailwindcss';

const config: Config = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/elements/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		backgroundPosition: {
			'xl-position': '-196px 40px',
			'sm-position': '50% 40px',
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			'xl-size': '744px',
			'lg-size': '644px',
			'md-size': '530px',
			'sm-size': '330px',
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			gray: {
				'100': '#F2F4F7',
				'200': '#EAECF0',
				'300': '#D0D5DD',
				'500': '#667085',
				'700': '#344054',
				'900': '#101828',
			},
			background: '#FEF0E2',
			headerBackground: '#fff',
			footerBackground: '#232527',
			gradient: {
				'1': '#FFD177',
				'2': '#FFA1A3',
				'3': '#D18FE9',
			},
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				select: '0px 8px 16px 0px rgba(27, 33, 44, 0.10)',
			},
			animation: {
				appearence: 'appearence .5s ease-in-out forwards',
				vanish: 'vanish .5s ease-in-out forwards',
				circleExpand: 'circleExpand 1s ease-in-out forwards',
				circleCollapse: 'circleCollapse 1s ease-in-out forwards',
				textShown: 'textShown 1s ease-in-out forwards',
				textHidden: 'textHidden .5s ease-in-out forwards',
				phoneImageXl: 'phoneImageXl .8s ease-in-out forwards',
				phoneImageReverseXl: 'phoneImageReverseXl .8s ease-in-out forwards',
				firstCardXl: 'firstCardXl 1s ease-in-out forwards',
				firstCardReverseXl: 'firstCardReverseXl 1s ease-in-out forwards',
				secondCardXl: 'secondCardXl 1s ease-in-out forwards',
				secondCardReverseXl: 'secondCardReverseXl 1s ease-in-out forwards',
				thirdCardXl: 'thirdCardXl 1s ease-in-out forwards',
				thirdCardReverseXl: 'thirdCardReverseXl 1s ease-in-out forwards',
				fourthCardXl: 'fourthCardXl 1s ease-in-out forwards',
				fourthCardReverseXl: 'fourthCardReverseXl 1s ease-in-out forwards',
				fifthCardXl: 'fifthCardXl 1s ease-in-out forwards',
				fifthCardReverseXl: 'fifthCardReverseXl 1s ease-in-out forwards',
				sixthCardXl: 'sixthCardXl 1s ease-in-out forwards',
				sixthCardReverseXl: 'sixthCardReverseXl 1s ease-in-out forwards',
				seventhCardXl: 'seventhCardXl 1s ease-in-out forwards',
				seventhCardReverseXl: 'seventhCardReverseXl 1s ease-in-out forwards',
			},
			keyframes: {
				appearence: {
					'0%': {
						display: 'flex',
						opacity: '0.1',
					},
					'20%': {
						opacity: '0.2',
					},
					'30%': {
						opacity: '0.3',
					},
					'50%': {
						opacity: '0.5',
					},
					'70%': {
						opacity: '0.7',
					},
					'80%': {
						opacity: '0.8',
					},
					'100%': {
						opacity: '1',
					},
				},
				vanish: {
					'0%': {
						opacity: '1',
					},
					'20%': {
						opacity: '0.8',
					},
					'30%': {
						opacity: '0.7',
					},
					'50%': {
						opacity: '0.5',
					},
					'70%': {
						opacity: '0.3',
					},
					'80%': {
						opacity: '0.2',
					},
					'100%': {
						opacity: '0.1',
						display: 'none',
					},
				},
				circleExpand: {
					'0%': {
						scale: '1',
					},
					'20%': {
						scale: '0.8',
					},
					'100%': {
						scale: '4',
					},
				},
				circleCollapse: {
					'0%': {
						scale: '4',
					},
					'80%': {
						scale: '0.8',
					},
					'100%': {
						scale: '1',
					},
				},
				textShown: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				textHidden: {
					'0%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
					},
				},
				phoneImageXl: {
					'0%': {
						left: '50%',
						top: '240px',
					},
					'100%': {
						left: '0%',
						top: '51px',
					},
				},
				phoneImageReverseXl: {
					'0%': {
						left: '0%',
						top: '51px',
					},
					'100%': {
						left: '50%',
						top: '240px',
					},
				},
				firstCardXl: {
					'0%': {
						top: '6px',
						left: '26%',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						top: '22px',
						left: '30%',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						top: '-33%',
						left: '1%',
						opacity: '0',
					},
				},
				firstCardReverseXl: {
					'0%': {
						scale: '1',
						top: '-33%',
						left: '1%',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						top: '22px',
						left: '30%',
					},
					'100%': {
						top: '6px',
						left: '26%',
						opacity: '1',
					},
				},
				secondCardXl: {
					'0%': {
						top: '41px',
						right: '503px',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						top: '57px',
						right: '543px',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						top: '-33%',
						right: '1%',
						opacity: '0',
					},
				},
				secondCardReverseXl: {
					'0%': {
						scale: '1',
						top: '-33%',
						right: '1%',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						top: '57px',
						right: '543px',
					},
					'100%': {
						top: '41px',
						right: '503px',
						opacity: '1',
					},
				},
				thirdCardXl: {
					'0%': {
						top: '150px',
						right: '307px',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						top: '166px',
						right: '347px',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						top: '200px',
						right: '1%',
						opacity: '0',
					},
				},
				thirdCardReverseXl: {
					'0%': {
						scale: '1',
						top: '200px',
						right: '1%',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						top: '166px',
						right: '347px',
					},
					'100%': {
						top: '150px',
						right: '307px',
						opacity: '1',
					},
				},
				fourthCardXl: {
					'0%': {
						top: '354px',
						right: '297px',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						top: '370px',
						right: '337px',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						top: '475px',
						right: '1%',
						opacity: '0',
					},
				},
				fourthCardReverseXl: {
					'0%': {
						scale: '1',
						top: '475px',
						right: '1%',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						top: '370px',
						right: '337px',
					},
					'100%': {
						top: '354px',
						right: '297px',
						opacity: '1',
					},
				},
				fifthCardXl: {
					'0%': {
						bottom: '0px',
						right: '547px',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						bottom: '-16px',
						right: '587px',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						bottom: '-52px',
						right: '500px',
						opacity: '0',
					},
				},
				fifthCardReverseXl: {
					'0%': {
						scale: '1',
						bottom: '-52px',
						right: '500px',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						bottom: '-16px',
						right: '587px',
					},
					'100%': {
						bottom: '0px',
						right: '547px',
						opacity: '1',
					},
				},
				sixthCardXl: {
					'0%': {
						bottom: '57px',
						left: '357px',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						bottom: '73px',
						right: '397px',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						bottom: '-48px',
						left: '1%',
						opacity: '0',
					},
				},
				sixthCardReverseXl: {
					'0%': {
						scale: '1',
						bottom: '-48px',
						left: '1%',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						bottom: '73px',
						right: '397px',
					},
					'100%': {
						bottom: '57px',
						left: '357px',
						opacity: '1',
					},
				},
				seventhCardXl: {
					'0%': {
						top: '232px',
						left: '297px',
						opacity: '1',
					},
					'20%': {
						scale: '0.8',
						top: '248px',
						left: '337px',
					},
					'75%': {
						opacity: '1',
					},
					'100%': {
						scale: '1',
						top: '252px',
						left: '1%',
						opacity: '0',
					},
				},
				seventhCardReverseXl: {
					'0%': {
						scale: '1',
						top: '252px',
						left: '1%',
						opacity: '0',
					},
					'25%': {
						opacity: '1',
					},
					'80%': {
						scale: '0.8',
						top: '248px',
						left: '337px',
					},
					'100%': {
						top: '232px',
						left: '297px',
						opacity: '1',
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
