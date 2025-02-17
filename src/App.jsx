import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { fetchArticles } from "./server";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticles(searchTerm).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [searchTerm]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <ArticleList articles={articles} />
    </>
  );
}

export default App;
