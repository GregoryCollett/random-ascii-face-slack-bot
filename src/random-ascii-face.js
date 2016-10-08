var faces = require('./faces');

module.exports = function randomAsciiFace() {
  return faces[Math.floor(Math.random() * faces.length)];
}
