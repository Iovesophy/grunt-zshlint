'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      files: ['*.js']
    },
    jsonlint: {
      files: ['.jshintrc', '*.json']
    },
    javascript: {
      options: {
        expand: true
      },
      files: {
        expand: true,
        ext: '.js',
        src: ['tasks/**/*.js', 'test/**/*.js']
      }
    }
  });
  
  grunt.registerTask('build', ['javascript']);
  grunt.registerTask('test', ['jshint', 'jsonlint', 'zshlint-test']);
  
  grunt.loadTasks('tasks');
  grunt.loadTasks('test/tasks');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
};
