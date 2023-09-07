import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../utils/api-utils";
import { useParams } from "react-router-dom";

const AllArticles = ({ searchParams, order }) => {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { topic } = useParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  console.log(orderQuery);

  useEffect(() => {
    getAllArticles(topic, sortByQuery, order)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Error loading articles.");
      });
  }, [topic, sortByQuery, order]);

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
