import React from "react";
import ArticleIndexItem from "./articleIndexItem";

class ArticleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  renderRows() {
    return this.props.articles.map((article, i) => {
      return (
      <ArticleIndexItem key={i} article={article} />
      );
    });
  }

  render() {

    return (
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

export default ArticleIndex;
