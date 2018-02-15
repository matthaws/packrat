import { connect } from "react-redux";
import ArticleIndex from "./articleIndex.jsx";
import { fetchAllArticles } from "../../actions/articleActions.js"
import { filteredArticles } from "../../util/filter.js";

const mapStateToProps = (state) => {
  return {
    articles: filteredArticles(state),
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllArticles: () => dispatch(fetchAllArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);
