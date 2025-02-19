import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../api";
import AddNewComment from "./AddNewComment";

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

  function handleNewComment(newComment) {
    setComments((c) => [newComment, ...c]);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <div className="comment-list">
        <AddNewComment
          article_id={article_id}
          addingComment={handleNewComment}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment">
                <p className="author-comment">{comment.author}</p>
                <p>{comment.body}</p>
                <p className="vote-comment">Votes:{comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommentList;
