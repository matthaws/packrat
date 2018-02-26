export const sortArticles = (articles, articleSortSettings) => {
  let sortedArticles = articles;
  for (let i = articleSortSettings.orderOfPriority.length - 1; i >= 0; i--) {
    const field = articleSortSettings.orderOfPriority[i];
    sortedArticles = sortedArticles.sort((x, y) => {
      let sortRes;
      if (x[field] === y[field]) {
        sortRes = 1;
      } else if (!x[field]) {
        sortRes = -1;
      } else if (!y[field]) {
        sortRes = 1;
      } else if (x[field].toLowerCase() > y[field].toLowerCase()) {
        sortRes = 1;
      } else if (x[field].toLowerCase() < y[field].toLowerCase()) {
        sortRes = -1;
      }
      return sortRes * articleSortSettings[field].order;
    });
  }
  return sortedArticles;
};
