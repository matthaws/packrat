import React from "react";
import ArticleIndexItem from "./articleIndexItem";
import "./articleIndex.css";

class ArticleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    const sortButtons = (field) => {
      return (
        [
          <button key={1} onClick={() => this.props.updateSort(field, 1)}> ▼ </button>,
          <button key={2} onClick={() => this.props.updateSort(field, -1)}> ▲ </button>
        ]
      );
    }

    return (
      <table>
        <tbody>
          <tr>
            <th>Categories</th>
            <th>Title
              {sortButtons("title")}
            </th>
            <th>Description
            {sortButtons("description")}
            </th>
            <th>Posted On
            {sortButtons("createdAt")}
            </th>
          </tr>
          {this.props.articles.map((article, i) => <ArticleIndexItem key={i} article={article} categories={this.props.categories}/>)}
        </tbody>
      </table>
    );
  }
}

export default ArticleIndex;
