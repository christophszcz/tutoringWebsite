module.exports = function (grunt){
	grunt.initConfig({

	  concat: {
	    js: {
	      src: ['js/main-section.js'],
	      dest: 'build/js/scripts.js',
	    },
	    css: {
	      src: ['css/main.css','css/style.css', ],
	      dest: 'build/css/styles.css',
	    },
	  },

	  watch: {
		  js: {
		    files: ['js/**/*.js'],
		    tasks: ['concat:js'],
		  },
		  css: {
		    files: ['css/**/*.css'],
		    tasks: ['concat:css'],
		  },
		},

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat','watch']);
	grunt.loadNpmTasks('grunt-browser-sync');
};	