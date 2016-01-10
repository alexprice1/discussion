'use strict';

const fs = require('fs');
const models = require('../models.js');
const renderToString = require('react-dom/server').renderToString;
const initialComponent = require('../private/discussion/initial-component.jsx');

const isopmorphicTemplate = fs.readFileSync('./views/index.html', {
  encoding: 'utf8',
});

module.exports = {
  index(req, res) {
    models.Topic.find().lean().then(function (topics) {
      const componentHTML = renderToString(initialComponent(topics));

      const HTML = isopmorphicTemplate
        .replace('${initialState}', JSON.stringify(topics))
        .replace('${componentHTML}', componentHTML);

      res.end(HTML);
    }).catch(function () {
      res.sendStatus(500);
    });
  },
};
