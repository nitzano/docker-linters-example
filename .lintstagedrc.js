const path = require('path')

module.exports = {
  'containers/container1/src/**/*.js': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file).slice(22))
    return `docker run -w /app --rm -v ${cwd}/containers/container1/src:/app/src container1 sh -c \"yarn lint --quiet --fix ${relativePaths.join(' ')}\"`
  }
}