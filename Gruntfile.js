module.exports = function(grunt){
    //load grunt plugins 
    ['grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-exec'].forEach(function(task){
        grunt.loadNpmTasks(task); 
    });
    
};