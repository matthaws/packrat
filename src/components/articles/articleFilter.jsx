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
        <input key={4} type="text" value={this.state.query} onChange={(e) => this.updateFilterQuery(e.target.value)}/>
        </label>,
        <div key={5} className="categories">
        {this.renderCheckboxes()}
        </div>
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
