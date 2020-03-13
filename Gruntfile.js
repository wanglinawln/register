/*global module:true*/
/*eslint linebreak-style: ["error", "unix"]*/
module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            'dist/register.css': 'register.css'
        },
        uglify: {
            release:{
                files: {
                    'dist/register.js': 'register.js',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('release', ['uglify', 'cssmin', 'htmlmin']);
};