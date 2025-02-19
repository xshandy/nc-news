import { useParams } from "react-router";
import { fetchArticleByArticleId } from "../api";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import Voting from "./Voting";
import NewComment from "./AddNewComment";

function SingleArticle() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchArticleByArticleId(article_id).then((singleArticleData) => {
      setArticle(singleArticleData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="singleArticle-container">
      <h2>{article.title}</h2>
      <p className="author">Posted by:{article.author}</p>

      <Voting
        votes={article.votes}
        article_id={article_id}
        setArticle={setArticle}
      />

      <img src={article.article_img_url} />
      <p>{article.body}</p>

      <CommentList article_id={article_id} />
    </div>
  );
}

export default SingleArticle;
