module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_layouts/**/*.md',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    theme: {
      extend: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
