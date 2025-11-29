/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                slate: {
                    900: 'var(--color-bg-primary)',
                    800: 'var(--color-bg-secondary)',
                    700: 'var(--color-bg-tertiary)',
                    100: 'var(--color-text-primary)',
                    400: 'var(--color-text-secondary)',
                },
                indigo: {
                    500: 'var(--color-accent-primary)',
                    600: 'var(--color-accent-hover)',
                }
            },
            backgroundColor: {
                'indigo-500/10': 'var(--color-accent-light)',
            },
            borderColor: {
                'slate-700': 'var(--color-border)',
            }
        },
    },
    plugins: [],
}
