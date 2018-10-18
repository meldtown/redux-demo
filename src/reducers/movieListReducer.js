import * as actions from '../action-types/movieListActions';

export default function movieList(state = [], action) {
  switch (action.type) {
    case actions.SEARCH_MOVIES_SUCCESS:
      return action.movieList;
    default:
      return state;
  }
}