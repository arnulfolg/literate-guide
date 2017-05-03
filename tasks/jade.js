/**
* grunt-contrib-jade options
* @type {Object}
*/

module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: '<%= folders.dev %>/jade/',
      src: ['*.jade'],
      dest: '<%= folders.dist %>',
      ext: '.html'
    }],
    options: {
      client: false,
      pretty: true,
      basedir: '<%= folders.dev %>/jade'
    }
  }
};