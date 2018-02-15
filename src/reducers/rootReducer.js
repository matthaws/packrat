import { combineReducers } from "redux";
import articles from "./articlesReducer";
import categories from "./categoriesReducer";
import ui from "./uiReducer";

export default combineReducers({
  articles,
  categories,
  ui,
});
