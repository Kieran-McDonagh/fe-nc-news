import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchVotesById } from "../utils/api-utils";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [articleToDisplay, setArticleToDisplay] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(0);
  const [originalVotes, setOriginalVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [voteErr, setVoteErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        setArticleToDisplay(article);
        setVotes(article.votes);
        setOriginalVotes(article.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleVote = (num) => {
    if (!hasVoted) {
      setVotes(votes + num);
      setHasVoted(true);
      patchVotesById(article_id, num).catch((err) => {
        setVoteErr("Something went wrong!");
        setVotes(originalVotes);
        setHasVoted(false);
      });
    }
  };

  const handleUndo = () => {
    setVotes(originalVotes);
    setHasVoted(false);
    patchVotesById(article_id, originalVotes - votes).catch((err) => {
      setVoteErr("Something went wrong!");
      setHasVoted(true);
    });
  };

  if (isloading) {
    return <h2>Loading article...</h2>;
  }

  if (err) {
    return <ErrorPage err={err}/>
  }

  return (
    <article className="individual-article">
      <section className="article-content">
        <h2 className="article-title">{articleToDisplay.title}</h2>
        <h3 className="article-author">Author: {articleToDisplay.author}</h3>
        <img src={articleToDisplay.article_img_url} alt="" />
        <p className="article-body">{articleToDisplay.body}</p>
      </section>
      {voteErr ? (
        <div className="alert-err">
          <h3>{voteErr}</h3>
          <button
            onClick={() => {
              setVoteErr(null);
            }}
          >
            retry
          </button>
        </div>
      ) : (
        <section className="article-votes">
          <span>Likes: {votes}</span>

          <button
            onClick={() => {
              handleVote(1);
            }}
            disabled={hasVoted}
          >
            👍
          </button>
          <button
            onClick={() => {
              handleVote(-1);
            }}
            disabled={hasVoted}
          >
            👎
          </button>
          {hasVoted && (
            <button
              onClick={() => {
                handleUndo();
              }}
            >
              undo ↪️
            </button>
          )}
        </section>
      )}
      <Comments article={articleToDisplay} />
    </article>
  );
};

export default IndividualArticle;
