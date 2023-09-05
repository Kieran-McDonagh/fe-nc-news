import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "./api-utils";
import Comments from "./Comments";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [articleToDisplay, setArticleToDisplay] = useState("");
  const [isloading, setIsLoading] = useState(true)


  useEffect(() => {
    setIsLoading(true)
    getArticleById(article_id).then(({ article }) => {
      setArticleToDisplay(article);
      setIsLoading(false)
    });
  }, [article_id]);

  if (isloading) {
    return <h2>Loading article...</h2>
  }

  return (
    <article className="individual-article">
      <section className="article-content">
        <h2 className="article-title">{articleToDisplay.title}</h2>
        <h3 className="article-author">Author: {articleToDisplay.author}</h3>
        <img src={articleToDisplay.article_img_url} alt="" />
        <p className="article-body">{articleToDisplay.body}</p>
      </section>
      <section className="article-votes">
        <span>Votes: {articleToDisplay.votes}</span>
        <button>👍</button>
        <button>👎</button>
      </section>
        <Comments article={articleToDisplay}/>
    </article>
  );
};

export default IndividualArticle;
