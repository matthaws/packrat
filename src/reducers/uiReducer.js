import {
  TOGGLE_OPEN_CLOSE,
  UPDATE_FILTER_CATEGORY,
  UPDATE_FILTER_QUERY,
  UPDATE_FILTER_DATES,
  CLEAR_FILTERS,
} from "../actions/uiActions";
import { merge } from "lodash";

const initialState = {
  articleFilter: {
    categories: [],
    query: "",
    dateRange: ["", ""]
  },
  openClose: {
    articleFilter: false,
    categoryList: false,
  }
};

const uiReducer = (state = initialState, action) => {
  let newState = merge({}, state);
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
    case UPDATE_FILTER_DATES:
      if (action.isStart) {
        newState.articleFilter.dateRange[0] = action.date;
      } else {
        newState.articleFilter.dateRange[1] = action.date;
      }
      break;
    case CLEAR_FILTERS:
      newState = merge({}, initialState);
      newState.openClose.articleFilter = true;
      break;
    default:
      return state
  }
  return newState;
}

export default uiReducer;
