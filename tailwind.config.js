const colors = {
  black: '#101913',
  white: '#F9FBFA',
  purple: '#BD4BF2',
  blue: '#5680EC',
  orange: '#F2954B',
  red: '#EC5C56',
  green: '#37ECBA',
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
          },
        },
      }),
    },
    colors,
    linearGradientDirections: {
      ne: '135deg' /* NE = north east */,
    },
    linearGradientColors: {
      'green-blue': [colors.green, colors.blue],
      'orange-red': [colors.orange, colors.red],
      'red-purple': [colors.red, colors.purple],
      'purple-blue': [colors.purple, colors.blue],
    },
    fontFamily: {
      body: [
        'Source Sans Pro',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients'),
    require('@tailwindcss/typography'),
  ],
}
