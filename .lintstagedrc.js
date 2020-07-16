const path = require('path')

module.exports = {
  'containers/container1/*.js': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file))
    return `echo ${relativePaths.join(' ')}`
  }
}