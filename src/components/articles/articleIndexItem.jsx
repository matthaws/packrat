import React from 'react';
import "./articleIndexItem.css";

const ArticleIndexItem = ({article, categories}) => {
  return (
    <tr>
      <td>{article.categoryIds.map((id) => categories[id].subject)}</td>
      <td><a href={article.url} target="_blank">{article.title}</a></td>
      <td>{article.description}</td>
      <td>{new Date(article.createdAt).toDateString()}</td>
    </tr>
  );
};

export default ArticleIndexItem;
