import { connect } from "react-redux";
import ArticleIndex from "./articleIndex.jsx";
import { fetchAllArticles } from "../../actions/articleActions.js"

const mapStateToProps = (state) => {
  return {
    articles: Object.values(state.articles) || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllArticles: () => dispatch(fetchAllArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);
