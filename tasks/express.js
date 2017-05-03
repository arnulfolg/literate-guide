/**
* grunt-express options
* @type {Object}
*/

module.exports = {
	custom: {
		options: {
			port: 8080,
			hostname: "localhost",
			bases: 'dist',
			open: true,
			livereload: true,
		}
	}
};
