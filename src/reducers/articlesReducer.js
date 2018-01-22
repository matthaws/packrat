import {
  RECEIVE_ARTICLE,
  RECEIVE_ALL_ARTICLES
} from "../actions/articleActions";

const articlesReducer = (state = {}, action) => {
  let oldState = Object.assign({}, state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      newState = Object.assign({}, oldState, action.articles);
      break;
    case RECEIVE_ARTICLE:
      newState = Object.assign({}, oldState, action.article);
      break;
    default:
      newState = oldState;
  }
  return newState;
};

export default articlesReducer;
