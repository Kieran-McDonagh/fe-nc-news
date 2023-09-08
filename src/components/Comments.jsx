import { useEffect, useState } from "react";
import { deleteComment, getArticleCommentsById } from "../utils/api-utils";
import PostComment from "./PostComment";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Comments = ({ article }) => {
  const { user } = useContext(UserContext);
  const { article_id } = article;
  const [comments, setComments] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [typedUsername, setTypedUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleCommentsById(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Something went wrong!");
      });
  }, [article_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let foundUser = false;
    user.forEach((user) => {
      if (typedUsername === user.username) {
        setUsername(user.username);
        foundUser = true;
      }
    });
    if (!foundUser) {
      setUsernameErr("Invalid username");
      setTypedUsername("");
    }
  };

  if (usernameErr) {
    return (
      <div className="alert-err">
        <h3>{usernameErr}</h3>
        <span>Try one of these:</span>
        <ul>
          <li>tickle122</li>
          <li>grumpy19</li>
          <li>jessjelly</li>
        </ul>
        <button
          onClick={() => {
            setUsernameErr(null);
          }}
        >
          retry
        </button>
      </div>
    );
  }

  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        const commentsToReturn = comments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setComments(commentsToReturn);
      })
      .catch((err) => {
        setErr("Something went wrong!");
      });
  };

  if (isloading) {
    return <p>Loading comments...</p>;
  }

  if (err) {
    return (
      <div className="alert-err">
        <h3>{err}</h3>
        <button
          onClick={() => {
            setErr(false);
          }}
        >
          retry
        </button>
      </div>
    );
  }

  if (!username) {
    return (
      <>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="login">
            Login to post or delete a comment:
            <input
              required
              placeholder="username"
              id="login"
              value={typedUsername}
              onChange={(event) => {
                setTypedUsername(event.target.value);
              }}
            ></input>
          </label>
          <button>login</button>
        </form>
        <section className="comments-section">
          <span>Comments:</span>
          {comments.map(({ author, comment_id, body, votes }) => {
            return (
              <ul className="comment" key={comment_id}>
                <li>{author}:</li>
                <li>"{body}"</li>
                <li>votes: {votes}</li>
              </ul>
            );
          })}
        </section>
      </>
    );
  }

  if (username) {
    return (
      <>
        <PostComment article={article} setComments={setComments} username={username}/>
        <section className="comments-section">
          <span>Comments:</span>
          {comments.map(({ author, comment_id, body, votes }) => {
            return (
              <ul className="comment" key={comment_id}>
                <li>{author}:</li>
                <li>"{body}"</li>
                <li>votes: {votes}</li>
                {username === author ? (
                  <button className="delete-button"
                    onClick={() => {
                      handleDelete(comment_id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </ul>
            );
          })}
        </section>
      </>
    );
  }
};

export default Comments;
