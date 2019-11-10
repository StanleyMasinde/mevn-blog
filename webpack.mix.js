const mix = require('laravel-mix');

mix.js('src/app.js', 'public/javascripts')
   .sass('src/app.scss', 'public/stylesheets')
   .setPublicPath('public');