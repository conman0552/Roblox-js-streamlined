// Includes
var http = require('../util/http.js').func;
var getHash = require('../util/getHash.js').func;
var cache = require('../cache');

// Args
exports.required = ['message', 'url'];

// Define
function postMessageToDiscord(message, url) {
    message = message
    
    var discordUrl = url;
    var payload = JSON.stringify({content: message});
    
    var params = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      payload: payload,
      muteHttpExceptions: true
    };
    
    var response = UrlFetchApp.fetch(discordUrl, params);
  };

exports.func = function (args) {
  var url = args.url;
  var message = args.message;
    return postMessageToDiscord(message, url);
};
