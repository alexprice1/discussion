import React from 'react';

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleInputChange(event) {
    this.props.changeSearchText(event.target.value);
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this.props.searchForTopics();
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit}>
        <div className="row collapse">
            <div className="small-10 medium-11 columns">
              <input type="text" placeholder="Search Term..." value={this.props.searchText} onChange={this._handleInputChange}/>
            </div>
            <div className="small-2 medium-1 columns">
              <button className="button postfix">Search</button>
            </div>
        </div>
      </form>
    );
  }
}

SearchField.propTypes = {
  changeSearchText: React.PropTypes.func,
  searchForTopics: React.PropTypes.func,
  searchText: React.PropTypes.string,
};
