const path = require('path')

module.exports = {
  'containers/container1/src/**/*.js': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file).slice(22))
    return `docker run container1 -v ${cwd}/containers/container1/src:/app/src yarn lint --fix ${relativePaths.join(' ')}`
  }
}