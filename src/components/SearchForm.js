import React from 'react';
import {connect} from 'react-redux';
import {searchMovies} from "../actions/movieListActions";

function mapDispatchToProps(dispatch) {
  return {
    searchMovies: (query, page) => dispatch(searchMovies(query, page))
  }
}

class SearchForm extends React.Component {
  state = {
    query: ''
  }
  search = e => {
    const query = e.target.value.toLowerCase().trim();
    this.setState({query});
    this.props.searchMovies(query);
  }

  render() {
    return <div>
      <input type="text" value={this.state.query} onChange={this.search} placeholder='Type name of the movie'/>
    </div>
  }
}

export default connect(null, mapDispatchToProps)(SearchForm);