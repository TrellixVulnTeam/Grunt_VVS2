# Grunt

npm install -g grunt-cli

mkdir src
mkdir src/css
touch src/css/main.min.css
mkdir src/js
touch src/js/main.js
mkdir dist
touch dist/index.html
mkdir dist/css
touch dist/css/style.min.css
mkdir dist/js
touch dist/js/script.min.js
touch package.json
touch Gruntfile.js
npm init -y

npm install
npm install grunt --save-dev

npm install bootstrap
npm install grunt-contrib-copy --save-dev

mkdir src/css/sass
touch src/css/sass/style.sass

touch src/css/sass.css

mkdir src/css/scss
touch src/css/scss/style.scss

touch src/css/scss.css

npm install grunt-contrib-sass --save-dev

mkdir src/css/less
touch src/css/less/style.less

touch src/css/less.css

npm install grunt-contrib-less --save-dev

touch src/css/concat.css

npm install grunt-contrib-concat --save-dev

touch src/css/postcss.css

npm install grunt-postcss autoprefixer

npm install grunt-contrib-cssmin --save-dev

npm install jquery

touch src/js/main.min.js

npm install grunt-contrib-uglify --save-dev

touch src/js/concat.js

npm install grunt-contrib-jshint --save-dev

npm install grunt-contrib-htmlmin --save-dev

npm install grunt-contrib-watch --save-dev



