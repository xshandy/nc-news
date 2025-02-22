import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../api";
import AddNewComment from "./AddNewComment";
import DeleteAComment from "./DeleteAComment";
import { useUser } from "./UserContext";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedUser } = useUser();

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

  function handleDelete(index) {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <div className="comment-list">
        {selectedUser ? (
          <AddNewComment
            article_id={article_id}
            addingComment={handleNewComment}
            selectedUser={selectedUser}
          />
        ) : (
          <p>Please log in to add a comment</p>
        )}

        <ul>
          {comments.map((comment, index) => {
            return (
              <li key={comment.comment_id} className="comment">
                <p className="author-comment">{comment.author}</p>
                <p>{comment.body}</p>
                <p className="vote-comment">Votes:{comment.votes}</p>

                <DeleteAComment
                  handleDelete={handleDelete}
                  index={index}
                  comment_id={comment.comment_id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommentList;
