import React from 'react';
import Topic from './topic';
import TopicFilters from './topic-filters';
import SearchField from './search-field';

export default class Conversation extends React.Component {
  render() {
    const {
      actions,
      appState,
    } = this.props;

    const topics = appState.get('topics');
    const filteredTopics = topics.filter((topic) => {
      return topic.discussion !== undefined;
    });

    const Topics = filteredTopics.map((topic, index) => {
      const hr = index !== topics.size ? <hr/> : null;

      return (
        <div key={index}>
          <Topic topic={topic}/>
          {hr}
        </div>
      );
    });

    return (
      <div>
        <div className="header">
          <div className="row">
            <div className="small-12 columns">
              <h3>A Discussion with Tim Cook</h3>
            </div>
          </div>
          <div className="row">
            <div className="small-12 columns">
              <SearchField
                changeSearchText={actions.changeSearchText}
                searchForTopics={actions.searchForTopics}
                searchText={appState.get('searchText')}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="small-12 columns">
              <h5> Show me the discussion concerning: </h5>
              <TopicFilters topics={topics} changeFilter={actions.changeFilter}/>
              {Topics}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Conversation.propTypes = {
  appState: React.PropTypes.object,
  actions: React.PropTypes.object,
};
