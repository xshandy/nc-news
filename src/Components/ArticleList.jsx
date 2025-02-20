import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router";
import { useSearchParams } from "react-router";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");

  function setTopic(topic) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  }

  useEffect(() => {
    setLoading(true);
    fetchArticles(topicQuery).then((articlesdata) => {
      setArticles(articlesdata);
      setLoading(false);
    });
  }, [topicQuery]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articleList-container">
      <ul className="articleList">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
                <img src={article.article_img_url} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
