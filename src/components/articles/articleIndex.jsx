import React from 'react';

class ArticleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  renderRows() {
    return this.props.articles.map((article, i) => {
      return (
        <tr key={i}>
          <td><a href={article.url} target="_blank">{article.title}</a></td>
          <td>{article.description}</td>
        </tr>
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
