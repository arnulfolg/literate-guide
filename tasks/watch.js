/**
* grunt-contrib-watch options
* @type {Object}
*/

module.exports =  {
  options: {
    livereload: true
  },
  markup: {
    files: ['dev/jade/**/*.jade'],
    tasks: ['clear', 'jade:compile'],
  },
  styles: {
    files: ['dev/styles/**/*.scss'],
    tasks: ['clear', 'css_watcher_tasks'],
  },
  scripts: {
    files: ['dev/scripts/**/*.js'],
    tasks: ['clear', 'js_watcher_tasks'],
  },
  build: {
    files: ['gruntfile.js', 'tasks/*.js'],
    tasks: ['clear', 'jshint:grunt'],
  },
  copy: {
    files: ['bower.json', 'dev/images/**/*.*'],
    tasks: ['clear', 'copy'],
  },
};