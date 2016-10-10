var facesAsArray = require('./faces-as-array');
var facesAsObject = require('./faces-as-object');

module.exports = function asciiFace(face) {
  return (face) ?
    (facesAsObject[face]) ?
      facesAsObject[face] :
      "Couldn't find that face :(" :
    facesAsArray[Math.floor(Math.random() * facesAsArray.length)];
}
