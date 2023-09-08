import { useEffect, useState } from "react";
import { getArticleCommentsById } from "../utils/api-utils";
import PostComment from "./PostComment";
import NonUserComments from './NonUserComments'
import UserComments from './UserComments'

const Comments = ({ article }) => {
  const { article_id } = article;
  const [comments, setComments] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
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
    return <NonUserComments setUsername={setUsername} comments={comments}/>
  }

  if (username) {
    return (
      <>
        <PostComment article={article} setComments={setComments} username={username}/>
       <UserComments comments={comments} username={username} setComments={setComments} />
      </>
    );
  }
};

export default Comments;
