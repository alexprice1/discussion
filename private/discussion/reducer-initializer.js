import Immutable from 'immutable';
import { CHANGE_SEARCH_TEXT, TOGGLE_FILTER, GOT_TOPICS } from './actions.js';

function appState(state, action = {}) {
  let topics;
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return state.set('searchText', action.searchText);
    case GOT_TOPICS:
      const { foundTopics } = action;

      topics = state.get('topics').map(function (topic) {
        let topicMatch;
        foundTopics.some(function (foundTopic) {
          if (foundTopic._id === topic._id) {
            topicMatch = foundTopic;
            return true;
          }
        });

        const returnTopic = topicMatch ? topicMatch : Object.assign({
          _id: topic._id,
          name: topic.name,
        });

        returnTopic.isSelected = topic.isSelected;

        return returnTopic;
      });
      return state.set('topics', topics);
    case TOGGLE_FILTER:
      topics = state.get('topics').map(function (topic) {
        if (topic._id === action.topicId) {
          return Object.assign(topic, {
            isSelected: !topic.isSelected,
          });
        }

        return topic;
      });
      return state.set('topics', topics);
    default:
      return state;
  }
}

export default function (initialTopics) {
  const initialState = Immutable.Map({
    topics: Immutable.List(initialTopics),
  });

  return function (state = initialState, action = {}) {
    return appState(state, action);
  };
}
