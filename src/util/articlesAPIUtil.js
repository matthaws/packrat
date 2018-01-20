const url = "http://localhost:3000";

const authHeader = () => ({
    'Authorization': sessionStorage.getItem('auth_token'),
    'Content-Type': 'application/x-www-form-urlencoded'
  }
);

export const fetchAllArticles = async () => {
  const response = await fetch(`${url}/articles`, {
   method: 'get',
   headers: authHeader()
  })
  return await response.json();
};

export const createArticle = async (article) => {
  const newArticle = await fetch(`${url}/articles`, {
    method: 'post',
    headers: authHeader(),
    body: JSON.stringify({ article })
  });
  return newArticle;
}

export const fetchArticle = async (auth_token, articleId) => {
  const article = await fetch(`${url}/${articleId}`, {
    method: 'get',
    headers: authHeader(auth_token)
  })
}
