import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../server";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCommentsByArticleId(article_id).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>Votes:{comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
