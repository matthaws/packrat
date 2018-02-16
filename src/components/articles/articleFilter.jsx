import React from "react";
import { debounce } from "../../util/debounce.js";
import "./articleFilter.css";

class ArticleFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.debouncedUpdateFilterQuery = debounce(this.props.updateFilterQuery, 500)
  }

  updateFilterQuery(query) {
    this.setState({query});
    this.debouncedUpdateFilterQuery(false, query);
  }

  clearFilter() {
    this.props.updateFilterQuery("");
    this.props.updateFilterCategories();
  }

  renderCheckboxes() {
    return this.props.categories.map((category, i) => {
      return (
        <label key={i}>{category.subject}
          <input type="checkbox" checked={this.props.selectedCategories.includes(category.id)} onChange={() => this.props.updateFilterCategories(category.id)}/>
        </label>
      );
    });
  }

  render() {
    const filterContent = this.props.open ? (
      [
        <button key={1} onClick={this.props.toggleOpenClose}>Hide Filters</button>,
        <button key={2} onClick={this.clearFilter.bind(this)}>Remove Filters</button>,
        <label key={3}>Title/Description:
          <input type="text" value={this.state.query} onChange={(e) => this.updateFilterQuery(e.target.value)}/>
        </label>,
        <div key={4} className="categories">
        {this.renderCheckboxes()}
        </div>,
        <label key={5}>After:
          <input
          type="date"
          value={this.props.dateRange[0]}
          onChange={(e) => {this.props.updateFilterDates(e.target.value, true)} }
          max={this.props.dateRange[1]}/>
        </label>,
        <label key={6}>Before:
          <input
          type="date"
          value={this.props.dateRange[1]}
          onChange={(e) => {this.props.updateFilterDates(e.target.value, false)} }
          min={this.props.dateRange[0]}/>
        </label>
      ]
    ) : (
      <button onClick={this.props.toggleOpenClose}>
        Show Filters
      </button>
    );

    return (
      <div className="article-filter">
        {filterContent}
      </div>
    );
  }
}

export default ArticleFilter;
