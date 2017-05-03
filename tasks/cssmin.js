/**
* grunt-contrib-cssmin options
* Version 0.10.0 forced
* @type {Object}
*/

module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'dev/css/main.min.css': ['dev/css/main.css']
    }
  }
};