import React from 'react';
import {connect} from 'react-redux';
import MovieItem from "./MovieItem";

function mapStateToProps({movieList}) {
  return {movieList};
}

export const MovieList = ({movieList}) => {
  const movies = movieList.map(({title, poster_path, release_date}, i) => (
    <MovieItem poster_path={poster_path}
               release_date={release_date}
               title={title}
               key={i}/>));
  return <ul>
    {movies}
  </ul>
}

export default connect(mapStateToProps)(MovieList);