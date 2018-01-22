import * as ArticlesAPIUtil from "../util/ArticlesAPIUtil";
import { receiveErrors } from "./errorActions";

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";

export const receiveAllArticles = articles => {
  type: RECEIVE_ALL_ARTICLES, articles;
};

export const receiveArticle = article => {
  type: RECEIVE_ARTICLE, article;
};

export const fetchAllArticles = () => async dispatch => {
  const response = await ArticlesAPIUtil.fetchAllArticles();
  if (response.errors) {
    dispatch(receiveErrors(response.errors));
  } else {
    dispatch(receiveAllArticles(response.articles));
  }
};

export const createArticle = article => async dispatch => {
  const article = await ArticlesAPIUtil.createArticle(article);
  if (response.errors) {
    dispatch(receiveErrors(response.errors));
  } else {
    dispatch(receiveArticle(response));
  }
};

export const fetchArticle = id => async dispatch => {
  const article = await ArticlesAPIUtil.fetchArticle(id);
  if (response.errors) {
    dispatch(receiveErrors(response.errors));
  } else {
    dispatch(receiveArticle(response));
  }
};
