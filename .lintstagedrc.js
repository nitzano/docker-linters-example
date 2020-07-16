const path = require("path");

module.exports = {
  "containers/container1/src/**/*.js": (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) =>
      path.relative(cwd, file).replace("containers/container1/", "").join(" ")
    );
    return `docker run --rm -v ${cwd}/containers/container1/src:/app/src container1 sh -c \"yarn lint  --fix ${relativePaths}\"`;
  },
  "containers/container2/src/**/*.py": (absolutePaths) => {
    // const cwd = process.cwd();
    // const relativePaths = absolutePaths.map((file) =>
    //   path.relative(cwd, file).replace("containers/container2/", "").join(" ")
    // );
    return `echo ${absolutePaths}`;
    // return `docker run --rm -v ${cwd}/containers/container2/src:/app/src container2 sh -c \"pylint ${relativePaths}\"`;
  },
};
