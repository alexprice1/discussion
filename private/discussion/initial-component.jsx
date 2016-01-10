import React from 'react';
import reducerInitializer from './reducer-initializer';
import * as actions from './actions';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import Conversation from './components/conversation';
import thunk from 'redux-thunk';

function mapStateToProps(state) {
  return {
    appState: state,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

const ConnectedConversation = connect(mapStateToProps, mapDispatchToProps)(Conversation);

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

module.exports = function (providedState = window.__INITIAL_STATE__) {
  const reducers = reducerInitializer(providedState);
  const store = createStoreWithMiddleware(reducers);

  return (
    <Provider store={store}>
      <ConnectedConversation/>
    </Provider>
  );
};
