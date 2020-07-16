const path = require('path')

module.exports = {
  'containers/container1/**/*.js': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file).slice(22))
    return `echo ${relativePaths.join(' ')}`
  }
}