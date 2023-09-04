import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "./api-utils";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [articleToDisplay, setArticleToDisplay] = useState("");

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticleToDisplay(article);
    });
  }, [article_id]);

  return (
    <article className="individual-article">
      <section className="article-content">
        <span>{articleToDisplay.title}</span>
        <span>Author: {articleToDisplay.author}</span>
        <img src={articleToDisplay.article_img_url} alt="" />
        <p>{articleToDisplay.body}</p>
      </section>
      <section className="article-votes">
        <span>{articleToDisplay.votes}</span>
        <button>👍</button>
        <button>👎</button>
      </section>
      <section className="comments-section">
        <p>comments go here</p>
      </section>
    </article>
  );
};

export default IndividualArticle;
