const moment = require('moment');
var mysql = require("mysql") ;
const { text } = require('express');


function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
   
}

module.exports = formatMessage;
