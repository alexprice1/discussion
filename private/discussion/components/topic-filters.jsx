import React from 'react';

export default class TopicFilters extends React.Component {
  render() {
    const {
      topics,
      changeFilter,
    } = this.props;

    const Filters = topics.map((topic, index) => {
      const topicFilterClass = !topic.discussion ? 'topic-filter-found' : '';

      return (
        <div className="columns small-6 medium-4 large-3" key={index}>
          <label key={index} className={topicFilterClass}>
            <input type="checkbox" onChange={changeFilter.bind(undefined, topic._id)} checked={topic.isSelected}/>
            {topic.name}
          </label>
        </div>
      );
    });

    return (
      <div className="row topic-filters">
        {Filters}
      </div>
    );
  }
}

TopicFilters.propTypes = {
  topics: React.PropTypes.object,
  changeFilter: React.PropTypes.func,
};
