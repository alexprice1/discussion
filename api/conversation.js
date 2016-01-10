'use strict';

const models = require('../models.js');

module.exports = {
  search(req, res) {
    const topicIds = req.body.topicIds || [];
    const query = {};

    if (topicIds && topicIds.length) {
      query._id = {
        $in: topicIds,
      };
    }

    if (req.body.searchText) {
      query['discussion.text'] = new RegExp(req.body.searchText, 'i');
    }

    models.Topic.find(query).lean().then(function (foundTopics) {
      res.send(foundTopics);
    }).catch(function () {
      res.sendStatus(500);
    });
  },
};
