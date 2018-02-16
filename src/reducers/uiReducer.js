import {
  TOGGLE_OPEN_CLOSE,
  UPDATE_FILTER_CATEGORY,
  UPDATE_FILTER_QUERY,
  UPDATE_FILTER_DATES,
  CLEAR_FILTERS,
  UPDATE_SORT,
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
  },
  articleSortSettings: {
    orderOfPriority: ["createdAt", "title", "description"],
    title: {
      order: 1,
    },
    description: {
      order: 1,
    },
    createdAt: {
      order: 1,
    },
  },
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
    case UPDATE_SORT:
      newState.articleSortSettings[action.field].order = action.order;
      newState.articleSortSettings.orderOfPriority = newState.articleSortSettings.orderOfPriority.filter((field) => field !== action.field);
      newState.articleSortSettings.orderOfPriority.unshift(action.field);
      break;
    default:
      return state
  }
  return newState;
}

export default uiReducer;
