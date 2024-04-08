import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/elements/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '480px',
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
				appearence: 'appearence .5s ease-in-out',
				vanish: 'vanish .5s ease-in-out',
				circleExpand: 'circleExpand 1s ease-in-out forwards',
				circleCollapse: 'circleCollapse 1s ease-in-out forwards',
			},
			keyframes: {
				appearence: {
					'0%': {
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
					},
				},
				circleExpand: {
					'0%': {
						scale: '1',
					},
					'20%': {
						scale: '0.7',
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
						scale: '0.7',
					},
					'100%': {
						scale: '1',
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
