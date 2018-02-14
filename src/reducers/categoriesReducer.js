import { RECEIVE_ALL_ARTICLES } from "../actions/articleActions";

const categoriesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      newState = Object.assign({}, state, action.categories);
      break;
    default:
      newState = Object.assign({}, state);
      break;
  }
  return newState;
};

export default categoriesReducer;
