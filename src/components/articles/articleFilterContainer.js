import { connect } from "react-redux";
import ArticleFilter from "./articleFilter.jsx";
import {
  toggleOpenClose,
  updateFilterQuery,
  updateFilterCategories,
  updateFilterDates,
  clearFilters,
} from "../../actions/uiActions.js";

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
    open: state.ui.openClose.articleFilter,
    selectedCategories: state.ui.articleFilter.categories,
    query: state.ui.articleFilter.query,
    dateRange: state.ui.articleFilter.dateRange,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOpenClose: () => dispatch(toggleOpenClose("articleFilter")),
    updateFilterQuery: (query) => dispatch(updateFilterQuery(query)),
    updateFilterCategories: (categoryId) => dispatch(updateFilterCategories(categoryId)),
    updateFilterDates: (date, isStart) => dispatch(updateFilterDates(date, isStart)),
    clearFilters: () => dispatch(clearFilters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFilter);
