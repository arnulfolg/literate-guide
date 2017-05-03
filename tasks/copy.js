/**
 * grunt-contrib-copy options
 * @type {Object}
 */

module.exports = {
  dev: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= folders.dev %>',
      dest: '<%= folders.dist %>',
      src: [
        '*.{ico,txt}',
        '.htaccess',
        'assets/images/{,*/}*.{jpg,jpeg,png,webp,gif,svg}',
        'assets/videos/{,*/}*.{mp4,ogg}',
        'assets/*.png',
        'assets/fonts/{,*/}*',
        'fonts/{,*/}*',
        '../bower_components/jquery/dist/jquery.min.js' ,
          ]},
      { /* Bower and vendor stuff */
        expand: true,
        cwd: '<%= folders.root %>',
        dest: '<%= folders.dist %>',
        src: [
          'vendor/**/*js', 'vendor/**/*css', 'vendor/**/*png'
        ]
    },
      { /* Bower and vendor stuff */
        expand: true,
        flatten: true,
        cwd: '<%= folders.root %>',
        dest: '<%= folders.dist %>/vendor',
        src: [
          'bower_components/jquery/dist/jquery.min.js',  
          'bower_components/animate.css/animate.min.css'
          ]
    }]
  }
};
