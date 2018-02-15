export const filteredArticles = (state) => {
  const articles = {};
  const categoryIds = state.ui.articleFilter.categories.length > 0 ? state.ui.articleFilter.categories : Object.keys(state.categories);
  const query = state.ui.articleFilter.query.toLowerCase();
  categoryIds.forEach((categoryId) => {
    state.categories[categoryId].articleIds.forEach((articleId) => {
      const title = state.articles[articleId].title.toLowerCase();
      const description = (state.articles[articleId].description || "").toLowerCase();
      if (title.includes(query) || (description.includes(query))) {
        articles[articleId] = state.articles[articleId];
      }
    });
  });
  return Object.values(articles);
}
