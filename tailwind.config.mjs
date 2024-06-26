/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'window-wallpaper': "url('/bg.webp')",
				'chessboard': "url('/chessboard.png')",
				'logos': "url('/logos.png')",
				'skillsImg' : "url('/skills1.bmp')",
			},
			backgroundColor: {
				'primary': 'rgb(0 128 128 / 1)',
			},
		},
	},
	plugins: [],
}
