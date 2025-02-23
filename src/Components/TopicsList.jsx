import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router";

function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTopics().then((topicData) => {
      setTopics(topicData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="topicList-container">
      <ul className="topicList">
        {topics.map((topic, index) => {
          return (
            <li key={index}>
              <Link to={`/articles?topic=${topic.slug}`}>
                <h3>{topic.slug}</h3>
              </Link>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopicsList;
