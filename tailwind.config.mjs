/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-dim': '#0f172a',
        'primary-blue': '#38bdf8',
        'accent-pink': '#e11d48',
      },
    },
  },
}
