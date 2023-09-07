import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../utils/api-utils";

const AllArticles = ({ topic, searchParams }) => {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    getAllArticles(topicQuery)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Error loading articles.");
      });
  }, [topic]);

  if (isloading) {
    return <h2>Loading articles...</h2>;
  }

  if (err) {
    return <h2>{err}</h2>;
  }

  return (
    <section className="articles-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default AllArticles;
