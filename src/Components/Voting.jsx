import { useState } from "react";
import { updateArticleVotes } from "../api";

function Voting({ article_id, votes }) {
  const [voteCount, setvoteCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleIncvote(e) {
    e.preventDefault();
    setvoteCount((v) => v + 1);
    updateArticleVotes(1, article_id).catch(() => {
      setMessage("Failed to vote. Please try again. ");
    });
  }

  function handleDecVote(e) {
    e.preventDefault();
    setvoteCount((v) => v - 1);
    updateArticleVotes(-1, article_id).catch(() => {
      setMessage("Failed to vote. Please try again. ");
    });
  }

  return (
    <>
      {message}
      <p>Votes:{votes + voteCount}</p>
      <button onClick={handleIncvote}>
        <i className="fa-regular fa-thumbs-up"></i>
      </button>
      <button onClick={handleDecVote}>
        <i className="fa-regular fa-thumbs-down"></i>
      </button>
    </>
  );
}

export default Voting;
