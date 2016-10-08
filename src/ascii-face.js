var facesAsArray = require('./faces-as-array');

module.exports = function randomAsciiFace(face) {
  return facesAsArray[Math.floor(Math.random() * faces.length)];
}
