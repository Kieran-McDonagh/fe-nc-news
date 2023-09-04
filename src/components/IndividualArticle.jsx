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
        <h2 className="article-title">{articleToDisplay.title}</h2>
        <h3 className="article-author">Author: {articleToDisplay.author}</h3>
        <img src={articleToDisplay.article_img_url} alt="" />
        <p className="article-body">{articleToDisplay.body}</p>
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
