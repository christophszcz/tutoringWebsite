module.exports = function (grunt){
	grunt.initConfig({

	  concat: {
	    js: {
	      src: ['js/main-section.js'],
	      dest: 'js/scripts.js',
	    },
	    css: {
	      src: ['css/main.css','css/style.css', ],
	      dest: 'css/styles.css',
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};	