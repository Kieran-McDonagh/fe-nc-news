import { postComment } from "../utils/api-utils";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const PostComment = ({ article, setComments }) => {
  const { user } = useContext(UserContext);
  const [newInput, setNewInput] = useState("");
  const { article_id } = article;
  const { username } = user;
  const [err, setErr] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, username, newInput).then((result) => {
      setComments((comments) => [...comments, result]);
    }).catch((err) => {
      setErr('Something went wrong!')
    })
    setNewInput("");
  };

  if (err) {
    return <div className="alert-err">
      <h3>
      {err}
    </h3>
    <button onClick={() => {
      setErr(null)
    }}>retry</button>
    </div>
  }

  return (
    <form className="new-comment-container" onSubmit={handleSubmit}>
      <label htmlFor="post-comment">new comment:</label>
      <div className="input-button-container">
        <textarea
          required
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
