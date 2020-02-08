let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/app.js', 'public/js/')
    .sass('src/app.scss', 'public/css/');

//mix.version(); // Enable versioning.
mix.options({
    extractVueStyles: true, // Extract .vue component styling to file, rather than inline.
    processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
    purifyCss: false, // Remove unused CSS selectors.
});

// mix.browserSync('localhost:3005');
mix.setPublicPath('public');
