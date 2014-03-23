// Return a mapping of the crucial files and their paths on disk

var path = require('path'),
    files = {};

function addPath(map, filename) {
  map[filename] = path.join(__dirname, filename);
}

addPath(files, 'flexgrid.css');
addPath(files, 'flexgrid-ie.css');
addPath(files, 'modernizr.js');
addPath(files, 'respond.js');

module.exports = files;

if (require.main === module) {
  console.log(module.exports);
}
