var botBuidler = require('claudia-bot-builder');
var asciiFace = require('./ascii-face');

module.exports = function() {
  return botBuidler(function(request) {
    if (request.text) {
      return {
        text: asciiFace() + '  -=:=-  ' + request.text,
        response_type: 'in_channel'
      }
    }
    else {
      return {
        text: asciiFace(),
        response_type: 'in_channel'
      }
    }
  });
}
