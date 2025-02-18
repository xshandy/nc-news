import { useState } from "react";
import { updateArticleVotes } from "../server";

function Voting({ article_id, votes, setArticle }) {
  const [voteCount, setvoteCount] = useState(0);

  function handleIncvote(e) {
    e.preventDefault();
    setvoteCount((v) => v + 1);
    updateArticleVotes(1, article_id).then((latestVotes) => {
      setArticle((oldArticle) => ({ ...oldArticle, votes: latestVotes }));
    });
  }

  function handleDecVote(e) {
    e.preventDefault();
    setvoteCount((v) => v - 1);
    updateArticleVotes(-1, article_id).then((latestVotes) => {
      setArticle((oldArticle) => ({ ...oldArticle, votes: latestVotes }));
    });
  }

  return (
    <>
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
