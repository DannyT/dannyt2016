module.exports = function(grunt) {
  
    /**
     * Properties used by tasks.
     */
    var config = {
        // paths to directories / files used in the process.
        paths: {
            /**
             * Directory that contains the CSS.
             */
            styles: './styles',

            /**
             * Directory that contains the JavaScript.
             */
            js: './Scripts',

            /**
             * Theme artifacts from the build process will be placed in this directory.
             */
            dist: './dist'
        }
    };
  
    // Project configuration.
    grunt.initConfig({
         // configuration values used to drive the build.
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '<%= config.paths.styles %>/styles.css': '<%= config.paths.styles %>/styles.scss'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('default', ['sass']);
};