var botBuidler = require('claudia-bot-builder');
var asciiFace = require('./random-ascii-face');

module.exports = botBuidler(function(request) {
  return {
    text: asciiFace(),
    response_type: 'in_channel'
  }
});
