import { combineReducers } from "redux";
import articles from "./articlesReducer";
import categories from "./categoriesReducer";

export default combineReducers({
  articles,
  categories,
});
