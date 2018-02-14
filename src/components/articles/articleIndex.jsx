import React from "react";
import ArticleIndexItem from "./articleIndexItem";
import "./articleIndex.css";

class ArticleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          {this.props.articles.map((article, i) => <ArticleIndexItem key={i} article={article} />)}
        </tbody>
      </table>
    );
  }
}

export default ArticleIndex;
