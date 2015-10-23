module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		less: 
		{
			compile: {
				files: {
					'css/main.css' : 'less/main.less'
				}

			}
		}



	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less'])
};