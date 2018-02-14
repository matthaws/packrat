import * as ArticlesAPIUtil from "../util/articlesAPIUtil.js";
import { receiveErrors } from "./errorActions.js";

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";

export const receiveAllArticles = response => {
  return {
    type: RECEIVE_ALL_ARTICLES,
    articles: response.articles,
    categories: response.categories,
  };
};

export const receiveArticle = article => {
  return {
    type: RECEIVE_ARTICLE, article
  };
};

export const fetchAllArticles = () => async dispatch => {
  const response = await ArticlesAPIUtil.fetchAllArticles();
  if (response.errors) {
    dispatch(receiveErrors(response.errors));
  } else {
    dispatch(receiveAllArticles(response));
  }
};

export const createArticle = article => async dispatch => {
  const response = await ArticlesAPIUtil.createArticle(article);
  if (response.errors) {
    dispatch(receiveErrors(response.errors));
  } else {
    dispatch(receiveArticle(response));
  }
};

export const fetchArticle = id => async dispatch => {
  const response = await ArticlesAPIUtil.fetchArticle(id);
  if (response.errors) {
    dispatch(receiveErrors(response.errors));
  } else {
    dispatch(receiveArticle(response));
  }
};
