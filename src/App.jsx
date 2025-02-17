import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";

import "./App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ArticleList />
    </>
  );
}

export default App;
