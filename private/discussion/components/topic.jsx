import React from 'react';

export default class Topic extends React.Component {
  render() {
    const { topic } = this.props;

    const notes = topic.discussion.map(function (note, index) {
      return (
        <div className="row topic-note" key={index}>
          <div className="small-2 columns">
            <img src={note.participant.avatar} className="topic-note-image"/>
          </div>
          <div className="small-10 columns">
            <h5> {note.participant.name} </h5>
            {note.text}
          </div>
        </div>
      );
    });

    return (
      <div>
        <h4>{topic.name}</h4>
        <div>
          {notes}
        </div>
      </div>
    );
  }
}

Topic.propTypes = {
  topic: React.PropTypes.object,
};
