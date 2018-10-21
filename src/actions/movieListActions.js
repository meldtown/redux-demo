import * as actions from '../action-types/movieListActions';
import {findMovies} from "../client";

export const searchMovies = (query, page = 1) => async dispatch => {
  dispatch({type: actions.SEARCH_MOVIES});
  if (!query) return dispatch({type: actions.SEARCH_MOVIES_SUCCESS, movieList: []})
  try {
    const res = await findMovies(query, page);
    const movieList = res.data.results;
    dispatch({
      type: actions.SEARCH_MOVIES_SUCCESS,
      movieList
    });
  } catch (error) {
    dispatch({type: actions.SEARCH_MOVIES_ERROR});
    console.error(error.message);
  }
};