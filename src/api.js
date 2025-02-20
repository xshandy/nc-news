import axios from "axios";

const ncnewsAPI = axios.create({
  baseURL: `https://backend-project-nc-news-owjq.onrender.com/api/`,
});

export const fetchArticles = (topic) => {
  return ncnewsAPI.get(`articles`, { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleByArticleId = (article_id) => {
  return ncnewsAPI.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return ncnewsAPI.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const updateArticleVotes = (vote, article_id) => {
  return ncnewsAPI
    .patch(`articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article.votes;
    });
};

export const postComment = (newComment, article_id) => {
  return ncnewsAPI
    .post(`articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.postedComment;
    });
};

export const fetchUsers = () => {
  return ncnewsAPI.get(`users`).then(({ data }) => {
    return data.users;
  });
};

export const deleteCommentById = (comment_id) => {
  return ncnewsAPI.delete(`comments/${comment_id}`);
};

export const fetchTopics = () => {
  return ncnewsAPI.get(`topics`).then(({ data }) => {
    return data.topics;
  });
};
