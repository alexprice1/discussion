'use strict';

const models = require('./models.js');
const mongoose = require('mongoose');
const fs = require('fs');

const discussionData = JSON.parse(fs.readFileSync('./discussion_data.json'));

const participants = discussionData.participants;
const topics = discussionData.topics;

const dropCollections = [];

for (const key in models) {
  if (models.hasOwnProperty(key)) {
    dropCollections.push(models[key].remove());
  }
}

Promise.all(dropCollections).then(function () {
  const createTopics = topics.map(function (topic) {
    const discussion = topic.discussion.map(function (note) {
      return {
        participant: participants[note.speaker],
        text: note.text,
      };
    });

    return models.Topic.create({
      discussion,
      name: topic.name,
    });
  });

  return Promise.all(createTopics);
}).then(function () {
  console.log('created');
  mongoose.connection.close();
}).catch(function (error) {
  throw new Error(error);
});
