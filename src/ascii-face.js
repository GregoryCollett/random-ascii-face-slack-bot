var facesAsArray = require('./faces-as-array');
var faceAsObject = require('./faces-as-object');

module.exports = function asciiFace(face) {
  return (face) ?
    (facesAsObject[face]) ?
      facesAsObject[face] :
      "Couldn't find that face, here a random one!     " + facesAsArray[Math.floor(Math.random() * facesAsArray.length)] :
    facesAsArray[Math.floor(Math.random() * facesAsArray.length)];
}
