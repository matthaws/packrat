import React from "react";

class ArticleFilter extends React.Component {

  checkboxes() {
    return this.props.categories.map((category, i) => {
      return (
        <label key={i}>{category.subject}
          <input type="checkbox" checked={this.props.selectedCategories.includes(category.id)} onChange={() => this.props.updateFilterCategories(category.id)}/>
        </label>
      );
    });
  }

  render() {
    if (this.props.open) {
      return (
        <div>
          <button onClick={this.props.toggleOpenClose}>Hide Filters</button>
          <label>Title/Description:
            <input type="text" value={this.props.query} onChange={(e) => this.props.updateFilterQuery(e.target.value)}/>
          </label>
          {this.checkboxes()}
          <button onClick={() => {this.props.updateFilterQuery(""); this.props.updateFilterCategories()}}>Remove Filters</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.props.toggleOpenClose}>
          Show Filters
        </button>
      )
    }
  }
}

export default ArticleFilter;
