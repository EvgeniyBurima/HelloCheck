module.exports = {
    input: './assets/styles/global.css',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            backgroundImage: {
                'gradient-default': 'linear-gradient(115.16deg, var(--tw-gradient-stops))',
            },
            boxShadow: {
                button: '1px 1px 4px rgba(0, 0, 0, 0.16)',
            },
            screens: {
                sm: '320px',
            },
            colors: {
                background: '#f5f5f5',
                steel: {
                    50: '#F5F6F8',
                    100: '#D9DBE3',
                    200: '#B4B8C6',
                    300: '#8E94AA',
                    400: '',
                    500: '#434D71',
                    700: '#2C3D91',
                    800: '#1B1F2D',
                },
                blue: {
                    50: '#F6F7FE',
                    100: '#DBE0FC',
                    500: '#4966F2',
                    700: '#2C3D91',
                },
                green: {
                    50: '#F6FCF5',
                    100: '#DBF4D9',
                    500: '#4CC841',
                    700: '#2E7827',
                },
                yellow: {
                    50: '#FFFCF2',
                    100: '#FEF3CC',
                    500: '#FBC400',
                    700: '#977600',
                },
                red: {
                    50: '#FFF2F2',
                    100: '#FDE2E2',
                    500: '#F77070',
                    700: '#944343',
                },
                violet: {
                    500: '#972EEA',
                }
            },
            fontSize: {
                'label-small': '10px',
                'label-large': '14px',
                'xxs': '10px'
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            keyframes: {
                'search': {
                    from: {
                        width: '0'
                    },
                    to: {
                        width: '100%'
                    },
                }
            },
            animation: {
                'expand': 'search 0.15s linear forwards',
            },
        }
    },
    plugins: [require('autoprefixer')],
}