export const filteredArticles = (state) => {
  const articles = {};
  const categoryIds = state.ui.articleFilter.categories.length > 0 ? state.ui.articleFilter.categories : Object.keys(state.categories);
  const query = state.ui.articleFilter.query.toLowerCase();
  categoryIds.forEach((categoryId) => {
    state.categories[categoryId].articleIds.forEach((articleId) => {
      const title = state.articles[articleId].title.toLowerCase();
      const description = (state.articles[articleId].description || "").toLowerCase();
      const articleDate = state.articles[articleId].createdAt.slice(0, 10);
      const postedAfter = state.ui.articleFilter.dateRange[0];
      const postedBefore = state.ui.articleFilter.dateRange[1]
      if (title.includes(query) || (description.includes(query))) {
        if ((!postedAfter || postedAfter <= articleDate) && (!postedBefore || postedBefore >= articleDate))
        articles[articleId] = state.articles[articleId];
      }
    });
  });
  return Object.values(articles);
}
