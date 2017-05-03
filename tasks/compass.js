/**
* grunt-contrib-compass options
* @type {Object}
*/

module.exports = {
	dist: {
		options: {
			sassDir: 'dev/styles/',
			cssDir: '<%= folders.dist %>/css',
			specify: '<%= folders.dev %>/styles/*.scss'
		}
	}
};