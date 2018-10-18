import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps({movieList}) {
  return {movieList};
}

export const MovieList = props => {
  return <div>
    sdasd
  </div>
}

export default connect(mapStateToProps)(MovieList);