import { useEffect, useState } from "react";
import { getArticleCommentsById } from "../utils/api-utils";

const Comments = ({ article }) => {
  const { article_id } = article;
  const [comments, setComments] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleCommentsById(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isloading) {
    return <p>Loading comments...</p>;
  }

  return (
    <section className="comments-section">
      <span>Comments:</span>
      {comments.map((comment) => {
        return (
          <ul className="comment" key={comment.comment_id}>
            <li>{comment.author}:</li>
            <li>"{comment.body}"</li>
            <li>votes: {comment.votes}</li>
          </ul>
        );
      })}
    </section>
  );
};

export default Comments;
