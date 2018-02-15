import {
  TOGGLE_OPEN_CLOSE,
  UPDATE_FILTER_CATEGORY,
  UPDATE_FILTER_QUERY,
} from "../actions/uiActions";

const initialState = {
  articleFilter: {
    categories: [],
    query: "",
    dateRange: [null, null]
  },
  openClose: {
    articleFilter: false,
  }
};

const uiReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_OPEN_CLOSE:
      newState.openClose[action.component] = !newState.openClose[action.component];
      break;
    case UPDATE_FILTER_CATEGORY:
      if (newState.articleFilter.categories.includes(action.categoryId)) {
        newState.articleFilter.categories = newState.articleFilter.categories.filter((id) => id !== action.categoryId);
      } else if (!action.categoryId) {
        newState.articleFilter.categories = [];
      } else {
        newState.articleFilter.categories.push(action.categoryId);
      }
      break;
    case UPDATE_FILTER_QUERY:
      newState.articleFilter.query = action.query;
      break;
    default:
      return state
  }
  return newState;
}

export default uiReducer;
