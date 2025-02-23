import { useParams } from "react-router";
import { fetchArticleByArticleId } from "../api";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import Voting from "./Voting";
import { useErrorBoundary } from "react-error-boundary";

function SingleArticle() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    setLoading(true);
    fetchArticleByArticleId(article_id)
      .then((singleArticleData) => {
        setArticle(singleArticleData);
        setLoading(false);
      })
      .catch((error) => showBoundary(error));
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="singleArticle-container">
      <h2>{article.title}</h2>

      <img
        src={article.article_img_url}
        alt={`Image for article: ${article.title}`}
      />
      <p className="author">
        by <strong>{article.author}</strong>
      </p>
      <p className="article-date">{formatDate(article.created_at)}</p>
      <p className="article-body">{article.body}</p>
      <Voting
        votes={article.votes}
        article_id={article_id}
        setArticle={setArticle}
      />
      <CommentList article_id={article_id} />
    </div>
  );
}

export default SingleArticle;
