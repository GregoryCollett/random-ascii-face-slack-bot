var botBuidler = require('claudia-bot-builder');
var asciiFace = require('./random-ascii-face');

module.exports = function() {
  return botBuidler(function(request) {
    return {
      text: asciiFace(),
      response_type: 'in_channel'
    }
  });
}
