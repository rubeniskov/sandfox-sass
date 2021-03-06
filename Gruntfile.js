module.exports = function(grunt) {

    var path    = require("path"),

        time    = require('time-grunt')(grunt),

        pkg     = grunt.file.readJSON("package.json"),

        config =
        ({

            pkg: pkg,

            sass: {
                options: {
                    style: 'expanded',

                    sourceMap: false,

                    includePaths: [
                        './node_modules/bootcamp/dist'
                    ]
                },

                dev: {
                    options: {
                        sourceMap: true
                    },

                    files: {
                        './dist/sandfox.css': './src/main.scss'
                    }
                },

                unit: {
                    files: {
                        './test/report/unit.report.css': './test/unit/unit.scss'
                    }
                },

                travis: {
                    files: {
                        './test/report/unit.report.css': './test/unit/unit.travis.scss'
                    }
                }
            },

            watch: {
                css: {
                    files: ['./src/*.scss', './src/**/*.scss'],

                    tasks: ['sass:dev', 'sass:unit']
                },

                unit: {
                    files: ['./test/unit/units/*.scss'],

                    tasks: ['sass:dev', 'sass:unit']
                }
            },
        });
    
    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['sass:dev', 'sass:unit']);

    grunt.registerTask('travis', ['sass:dev', 'sass:travis']);

    grunt.registerTask('dev', ['sass:dev']);

    grunt.registerTask('master', ['sass:master']);

    grunt.registerTask('default', ['dev']);
};
