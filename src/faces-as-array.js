var faces = require('./faces-as-object');

module.exports = Object.keys(faces).map(function(key) {
  return faces[key];
});
