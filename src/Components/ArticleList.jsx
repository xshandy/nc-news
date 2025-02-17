function ArticleList({ articles }) {
  return (
    <div className="articleList-container">
      <ul>
        {articles.map((article) => {
          console.log(article);
          return (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <img src={article.article_img_url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
