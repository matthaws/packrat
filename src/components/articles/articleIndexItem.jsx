import React from 'react';
import "./articleIndexItem.css";

const ArticleIndexItem = ({article}) => {
  return (
    <tr>
      <td><a href={article.url} target="_blank">{article.title}</a></td>
      <td>{article.description}</td>
    </tr>
  );
};

export default ArticleIndexItem;
