module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')({
      // Target browsers for autoprefixer
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not ie < 11',
        'Safari >= 10',
        'iOS >= 10',
        'Chrome >= 60',
        'Edge >= 16'
      ],
      // Add vendor prefixes for flexbox
      flexbox: 'no-2009',
      // Disable grid autoprefixer to avoid conflicts with manual prefixes
      grid: false
    })
  ]
};
