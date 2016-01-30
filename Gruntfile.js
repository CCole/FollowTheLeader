module.exports = function(grunt){
    //load grunt plugins 
    ['grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-exec'].forEach(function(task){
        grunt.loadNpmTasks(task); 
    });
    
    //configure grunt plugins
    grunt.initConfig({
        cafemocha: {
            all: {src:'qa/tests/-*.js', options: {ui:'tdd'},}
        },
        jshint: {
          app: ['FTP.js','public/js/**/*.js','lib'], 
          qa: ['Gruntfile.js','public/qa/**/*.js'],  
        },
    });
    //register tasks
    grunt.registerTask('default', ['cafemocha', 'jshint']); 
    
};