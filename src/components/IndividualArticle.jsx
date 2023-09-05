import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchVotesById } from "../utils/api-utils";
import Comments from "./Comments";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [articleToDisplay, setArticleToDisplay] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(0)
  const [originalVotes, setOriginalVotes] = useState(0); 
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then(({ article }) => {
      setArticleToDisplay(article);
      setVotes(article.votes)
      setOriginalVotes(article.votes)
      setIsLoading(false);
    }).catch((err) => {
      setErr("Error fetching article.");
      setIsLoading(false);
    });
  }, [article_id]);

  if (isloading) {
    return <h2>Loading article...</h2>;
  }

  if (err) {
    return <h3>{err}</h3>
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
        <span>Votes: {votes}</span>
        <button
          onClick={() => {
            if (!hasVoted) {
              setVotes(votes + 1)
              setHasVoted(true);
              patchVotesById(article_id, 1).catch((err) => {
                alert('Something went wrong!')
                setVotes(originalVotes)
                setHasVoted(false)
              })
            }
          }}
          disabled={hasVoted}
        >
          👍
        </button>
        <button
        onClick={() => {
          if (!hasVoted) {
            setVotes(votes - 1)
            setHasVoted(true);
            patchVotesById(article_id, -1).catch((err) => {
              alert('Something went wrong!')
              setVotes(originalVotes)
              setHasVoted(false)
            })
          }
        }}
        disabled={hasVoted}
        >
          👎
        </button>
        {hasVoted && (
          <button
            onClick={() => {
              setVotes(originalVotes)
              setHasVoted(false);
              patchVotesById(article_id, originalVotes - votes).catch((err) => {
                alert('Something went wrong!')
              setHasVoted(true)
              })
              
            }}
          >
            Undo Vote
          </button>
        )}
      </section>
      <Comments article={articleToDisplay} />
    </article>
  );
};

export default IndividualArticle;
