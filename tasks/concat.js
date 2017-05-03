/**
* grunt-contrib-concat options
* @type {Object}
*/

module.exports = {
	options: {
		separator: '\n',
	},
	dist: {
		src: [
			"dev/scripts/*.js",
			/*
			'dev/scripts/app.js',
			'dev/scripts/header.js',
			'dev/scripts/master_programs.js',
			'dev/scripts/faqs.js',
			*/
		],
		dest: 'dist/js/app.js',
	},
};
