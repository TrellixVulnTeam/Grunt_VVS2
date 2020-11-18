module.exports = function(grunt) {

  grunt.initConfig({

    copy: {
      bootstrap: {
        src: 'node_modules/bootstrap/dist/css/bootstrap.css',
        dest: 'src/css/bootstrap.css',
      },
      jquery_1: {
        src: 'node_modules/jquery/dist/jquery.min.js',
        dest: 'src/js/jquery.min.js',
      },
      jquery_2: {
        src: 'node_modules/jquery/dist/jquery.min.js',
        dest: 'dist/js/jquery.min.js',
      },
      css: {
        src: 'src/css/main.min.css',
        dest: 'dist/css/style.min.css',
      },
      js: {
        src: 'src/js/main.min.js',
        dest: 'dist/js/script.min.js',
      },
    },

    sass: {
      dist: {
        files: {
          'src/css/sass.css': 'src/css/sass/style.sass',
          'src/css/scss.css': 'src/css/scss/style.scss',
        },
      },
    },

    less: {
      dist: {
        options: {
          sourcemap: false,
        },
        files: {
          'src/css/less.css': 'src/css/less/style.less',
        },
      },
    },

    concat: {
      options: {
        separator: '\r\n',
      },
      dist: {
        src: ['src/css/bootstrap.css', 'src/css/sass.css', 'src/css/scss.css', 'src/css/less.css'],
        dest: 'src/css/concat.css',
      },
    },

    autoprefixer: {
      options: {
        browsers: ['last 4 versions'],
      },
      your_target: {
        src: 'src/css/concat.css',
        dest: 'src/css/postcss.css',
      },
    },

    cssmin: {
      target: {
        files: {
          'src/css/main.min.css': 'src/css/postcss.css',
        },
      },
    },

    uglify: {
      options: {
          compress: {
              sequences: false,
          },
      },
      my_target: {
        files: {
          'src/js/main.min.js': ['src/js/main.js'],
        },
      },
    },

    jshint: {
      all: ['src/js/main.min.js'],
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'dist/index.html': 'src/index.html',
        },
      },
    },

    watch: {
      scripts: {
        files: 'src/**/*.*',
        tasks: [
          'copy:bootstrap',
          'sass',
          'less',
          'concat',
          'autoprefixer',
          'cssmin',
          'copy:jquery_1',
          'copy:jquery_2',
          'uglify',
          'jshint',
          'watch',
          ]
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', [
    'copy:bootstrap',
    'sass',
    'less',
    'concat',
    'autoprefixer',
    'cssmin',
    'copy:jquery_1',
    'copy:jquery_2',
    'uglify',
    'jshint',
    'copy:css',
    'copy:js',
    'htmlmin',
    'watch',
    ]);

};