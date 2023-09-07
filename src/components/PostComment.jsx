import { postComment } from "../utils/api-utils";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const PostComment = ({ article, setComments }) => {
  const { user } = useContext(UserContext);
  const [newInput, setNewInput] = useState("");
  const { article_id } = article;
  const [err, setErr] = useState(null);
  const [usernameErr, setUsernameErr] = useState(null);
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let foundUser = false;
    user.forEach((user) => {
      if (username === user.username) {
        foundUser = true;
        postComment(article_id, username, newInput)
          .then((result) => {
            setComments((comments) => [result, ...comments]);
          })
          .catch((err) => {
            setErr("Something went wrong!");
          });
      }
    });
    if (!foundUser) {
      setUsernameErr("Invalid username");
    }
    setNewInput("");
    setUsername("");
  };

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

  return (
    <form className="new-comment-container" onSubmit={handleSubmit}>
      <label htmlFor="post-comment">new comment:</label>
      <div className="input-button-container">
        <input
          required
          placeholder="username"
          id="enter-user"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <textarea
          required
          placeholder="Your comment..."
          id="post-comment"
          value={newInput}
          onChange={(event) => {
            setNewInput(event.target.value);
          }}
        ></textarea>
        <button>Post</button>
      </div>
    </form>
  );
};

export default PostComment;
