'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/chalkpluschisel');

module.exports = {
  Topic: mongoose.model('Topic', {
    discussion: [{
      participant: {
        speakerKey: Number,
        avatar: String,
        name: String,
      },
      text: String,
    }],
    name: String,
  }),
};
