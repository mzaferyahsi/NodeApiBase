/**
 * Created by mzaferyahsi on 15/12/15.
 */

/**
 * Created by mzaferyahsi on 09/12/15.
 */

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.initConfig({
        ts: {
            default : {
                src: ["./src/**/*.ts", "./src/*.ts", "!node_modules/**/*.ts"],
                outDir: "./dev",
                options: {
                    module : 'commonjs'
                }
            },
            tests : {
                src: ["./test/**/*.ts", "./test/*.ts"],
                options: {
                    module : 'commonjs'
                }
            },
        },
        watch : {
            ts : {
                files : ["./src/**/*.ts", "./src/*.ts", "!node_modules/**/*.ts"],
                tasks : ["ts"]
            },
            tests : {
                files: ["./test/**/*.ts", "./test/*.ts"],
                tasks: ["ts:tests"]
            },
        },

        mochaTest: {
            default: {
                options: {
                    reporter: 'spec',
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/**/*.js']
            }
        },
        nodemon: {
            dev: {
                script: 'dev/server.js'
            }
        },

        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }

    });


    grunt.registerTask("default", ["ts", "ts:tests", "concurrent:dev"]);
};