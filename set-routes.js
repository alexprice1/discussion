'use strict';

const initialRender = require('./api/initial-render.js');
const conversationAPI = require('./api/conversation.js');

module.exports = function (app) {
  app.get('/', initialRender.index);
  app.post('/api/conversation/search', conversationAPI.search);
};
