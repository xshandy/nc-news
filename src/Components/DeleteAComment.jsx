import { useState } from "react";
import { deleteCommentById } from "../api";

function DeleteAComment({ handleDelete, index, comment_id }) {
  const [message, setMessage] = useState("");

  function handleDeleteClick() {
    handleDelete(index);
    deleteCommentById(comment_id).catch(() => {
      setMessage("Failed to delete. Please try again.");
    });
  }

  return (
    <>
      {message}
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  );
}

export default DeleteAComment;
