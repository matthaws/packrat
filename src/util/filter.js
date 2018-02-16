const filterByQuery = (article, query) => {
  const title = article.title.toLowerCase();
  const description = (article.description || "").toLowerCase();
  return title.includes(query) || description.includes(query)
}

const filterByDate = (article, dateRange) => {
  const articleDate = article.createdAt.slice(0, 10);
  const postedAfter = dateRange[0];
  const postedBefore = dateRange[1];
  return (!postedAfter || postedAfter <= articleDate) && (!postedBefore || postedBefore >= articleDate)
}

const filterByCategory = (state) => {
  const articles = {};
  state.ui.articleFilter.categories.forEach((categoryId) => {
    state.categories[categoryId].articleIds.forEach((articleId) => {
      const article = state.articles[articleId];
      const query = state.ui.articleFilter.query.toLowerCase();
      const dateRange = state.ui.articleFilter.dateRange;
      if (filterByQuery(article, query) && filterByDate(article, dateRange)) {
        articles[articleId] = article;
      }
    });
  });
  return Object.values(articles);
}

export const filteredArticles = (state) => {
  const query = state.ui.articleFilter.query.toLowerCase();
  if (state.ui.articleFilter.categories.length > 0) {
    return filterByCategory(state);
  } else {
    const query = state.ui.articleFilter.query.toLowerCase();
    const dateRange = state.ui.articleFilter.dateRange;
    return Object.values(state.articles).filter((article) => {
      return filterByQuery(article, query) && filterByDate(article, dateRange);
    });
  }
}
