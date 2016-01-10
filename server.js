'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./models.js');
require('./isomorphic-setup.js');
require('./set-middleware')(app);
require('./set-routes')(app);

process.on('uncaughtException', (err) => {
  console.log(err.stack);
});

app.listen(port, function () {
  console.log(`Survey app is listening on ${port}`);
});
