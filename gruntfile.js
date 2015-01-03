// 包装函数
module.exports = function(grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      all: {
        options: {
          port: 9001,
          base: __dirname,
          //directory: 'web',
          hostname: '*',
          //keepalive: true,
          debug: true,
          middleware: function(connect) {
            return [
              require('json-proxy').initialize({
                proxy: {
                  forward: {
                    // '/api': 'http://mobile.hunantv.com/',
                    // '/video': 'http://mobile.hunantv.com/',
                    // '/Search': 'http://mobile.hunantv.com/'
                    '/junxin': 'http://112.124.104.49/'
                  },
                  headers: {
                    'Host': 'mobile.hunantv.com',
                    'Origin': 'http://mobile.hunantv.com',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                  }
                }
              }),
              require('connect-livereload')(),
              connect.static(__dirname)
            ]
          }
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['*.html', 'js_source/**/*.js', 'less/*.less'],
        tasks: ['less:all', 'uglify'],
        options: {
          spawn: false,
        },
      },
    },
    less: {
      all: {
        options: {
          paths: ["css"],
          cleancss: true,
        },
        files: {
          "css/index.css": "less/index.less"
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: false
        }
      },
      my_target: {
        files: {
          'js/frw.js': ['js_source/jquery.min.js',
                        'js_source/jquery.transit.js',
                        'js_source/mustache.js',
                        'js_source/WeixinApi.js',
                        'js_source/frw.js'],
        }
      }
    }
  });

  // 任务加载
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');

  // 自定义任务
  grunt.registerTask('default', ['connect:all', 'watch']);
  grunt.registerTask('build', ['uglify']);

};