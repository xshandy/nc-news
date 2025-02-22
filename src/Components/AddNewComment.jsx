import { useState } from "react";
import { postComment } from "../api";
import { useUser } from "./UserContext";

function AddNewComment({ article_id, addingComment }) {
  const [commentToPost, setCommentToPost] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { selectedUser } = useUser();

  function handleSubmit(e) {
    e.preventDefault();

    if (!commentToPost.trim()) {
      setError("No comment. Field must not be empty ");
      return;
    }

    if (!selectedUser) {
      setError("You must be logged in to comment");
      return;
    }

    const newComment = { username: selectedUser, body: commentToPost };

    postComment(newComment, article_id)
      .then((postedCommentData) => {
        addingComment(postedCommentData);
        setCommentToPost("");
        setError("");
      })
      .catch(() => {
        setMessage("Failed to post. Please try again.");
      });
  }

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="failed-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <p>
          Posting as: <strong>{selectedUser}</strong>
        </p>
        <br />
        <textarea
          type="text"
          placeholder="Join the conversation"
          value={commentToPost}
          onChange={(e) => {
            setCommentToPost(e.target.value);
          }}
          className="comment-input"
        />
        <br />
        <button
          className="comment-submit"
          disabled={!commentToPost.trim() || !selectedUser}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default AddNewComment;
