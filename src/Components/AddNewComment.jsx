import { useState } from "react";
import { postComment } from "../api";
import ValidUsers from "./ValidUsers";

function AddNewComment({ article_id, addingComment }) {
  const [commentToPost, setCommentToPost] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!commentToPost.trim()) {
      setError("No comment. Field must not be empty ");
      return;
    }

    if (!selectedUser) {
      setError("Please select a user.");
      return;
    }

    const newComment = { username: selectedUser, body: commentToPost };

    postComment(newComment, article_id)
      .then((postedCommentData) => {
        addingComment(postedCommentData);
        setCommentToPost("");
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
        <ValidUsers
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
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
