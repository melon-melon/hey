const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss({
      content: ['./src/**/*.njk'],
      safelist: [
        'bg-gradient-ne-green-blue',
        'bg-gradient-ne-orange-red',
        'bg-gradient-ne-red-purple',
        'bg-gradient-ne-purple-blue',
      ],
    }),
    require('cssnano'),
  ],
}
