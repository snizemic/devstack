var dest = './build';
var src = './src';

module.exports = {
  tasks: {
    html: {
      src: src + '/*.html',
      dest: dest
    },
    css: {
      src: src + '/scss/**/*.scss',
      dest: dest + '/css'
    },
    browserSync: {
      baseDir: './build/'
    }
  }
};