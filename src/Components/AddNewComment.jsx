import { useState } from "react";
import { postComment } from "../api";
import ValidUsers from "./ValidUsers";

function AddNewComment({ article_id, addingComment }) {
  const [commentToPost, setCommentToPost] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

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
      {message}
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
        <button className="comment-submit">Submit</button>
      </form>
    </>
  );
}
export default AddNewComment;
