import axios from "axios";

const ncnewsAPI = axios.create({
  baseURL: `https://backend-project-nc-news-owjq.onrender.com/api/`,
});

export const fetchArticles = () => {
  return ncnewsAPI.get(`articles`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleByArticleId = (article_id) => {
  return ncnewsAPI.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
