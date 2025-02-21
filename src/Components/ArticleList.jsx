import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router";
import { useSearchParams } from "react-router";
import SortingDropdown from "./SortingDropdown";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  function setTopic(topic) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  }

  useEffect(() => {
    setLoading(true);
    fetchArticles({
      topic: topicQuery,
      sort_by: sortByQuery,
      order: orderQuery,
    }).then((articlesdata) => {
      setArticles(articlesdata);
      setLoading(false);
    });
  }, [topicQuery, sortByQuery, orderQuery]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articleList-container">
      <SortingDropdown
        setSearchParams={setSearchParams}
        orderQuery={orderQuery}
        sortByQuery={sortByQuery}
      />
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
