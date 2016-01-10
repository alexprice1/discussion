import request from 'superagent';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const GOT_TOPICS = 'GOT_TOPICS';
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

export function changeSearchText(searchText) {
  return {
    type: CHANGE_SEARCH_TEXT,
    searchText,
  };
}

export function toggleFilter(topicId) {
  return {
    type: TOGGLE_FILTER,
    topicId,
  };
}

export function gotTopics(foundTopics) {
  return {
    type: GOT_TOPICS,
    foundTopics,
  };
}

export function searchForTopics() {
  return function (dispatcher, getState) {
    const state = getState();
    const topicIds = state.get('topics').filter(function (topic) {
      return topic.isSelected;
    }).map(function (topic) {
      return topic._id;
    });

    request
      .post('/api/conversation/search')
      .send({
        topicIds,
        searchText: state.get('searchText'),
      })
      .end(function (err, response) {
        if (!err) dispatcher(gotTopics(response.body));
      });
  };
}

export function changeFilter(topicId) {
  return function (dispatcher) {
    dispatcher(toggleFilter(topicId));
    dispatcher(searchForTopics());
  };
}
