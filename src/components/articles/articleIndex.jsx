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
            <th>Categories</th>
            <th>Title</th>
            <th>Description</th>
            <th>Posted On</th>
          </tr>
          {this.props.articles.map((article, i) => <ArticleIndexItem key={i} article={article} categories={this.props.categories}/>)}
        </tbody>
      </table>
    );
  }
}

export default ArticleIndex;
