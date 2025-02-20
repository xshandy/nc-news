import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import "./App.css";
import NavBar from "./Components/NavBar";
import SingleArticle from "./Components/SingleArticle";
import { Routes, Route } from "react-router";
import TopicsList from "./Components/TopicsList";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/topics" element={<TopicsList />}></Route>
      </Routes>
    </>
  );
}

export default App;
