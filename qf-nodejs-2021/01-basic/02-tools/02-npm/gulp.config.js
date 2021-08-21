const { src, dest, series } = require('gulp')

const node_env = process.env.NODE_ENV
console.log(node_env)

function scripts() {
  return src('./03-scripts/app.js', { sourcemaps: true })
    .pipe(dest('./03-scripts/dist/'))
}

var build = series(scripts)

exports.default = build