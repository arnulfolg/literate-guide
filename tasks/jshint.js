/**
* grunt-jshint options
* @type {Object}
*/

module.exports =  {
	options: {
		force: true,
		esversion: 6
	},
	scripts: ['dev/scripts/**/*.js'],
	grunt: ['gruntfile.js', 'grunt/*.js']
};