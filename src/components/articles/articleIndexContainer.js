import { connect } from "react-redux";
import ArticleIndex from "./articleIndex.jsx";
import { fetchAllArticles } from "../../actions/articleActions.js"
import { updateSort } from "../../actions/uiActions.js";
import { filterArticles } from "../../util/filter.js";
import { sortArticles } from "../../util/sorters.js";

const mapStateToProps = (state) => {
  return {
    articles: sortArticles(filterArticles(state), state.ui.articleSortSettings),
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllArticles: () => dispatch(fetchAllArticles()),
    updateSort: (field, order) => dispatch(updateSort(field, order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);
