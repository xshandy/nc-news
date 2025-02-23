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
      {message && <p className="vote-message">{message}</p>}
      <div className="vote-container">
        <p>
          <strong>Votes: {votes + voteCount}</strong>
        </p>
        <div className="vote-buttons">
          <button onClick={handleIncvote}>
            <i className="fa-regular fa-thumbs-up fa-xl thumb-up"></i>
          </button>
          <button onClick={handleDecVote}>
            <i className="fa-regular fa-thumbs-down fa-xl thumb-down"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Voting;
