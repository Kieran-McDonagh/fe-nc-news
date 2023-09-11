import { useState } from "react";
import { deleteComment } from "../utils/api-utils";

const UserComments = ({ comments, setComments, username }) => {
  const [deleteErr, setDeleteErr] = useState(null);

  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        const commentsToReturn = comments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setComments(commentsToReturn);
      })
      .catch((err) => {
        setDeleteErr(comment_id);
      });
  };

  return (
    <section className="comments-section">
      <span>Comments:</span>
      {comments.map(({ author, comment_id, body, created_at, votes }) => {
       const createdAt = new Date(created_at);
       const formattedDate = createdAt.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
        return (
          <ul className="comment" key={comment_id}>
            {deleteErr === comment_id ? (
              <p className="delete-error-message">
                Error deleting comment, please try again
              </p>
            ) : (
              <>
                <li>{author}:</li>
                <li>"{body}"</li>
                <li>Posted: {formattedDate}</li>
                <li>Likes: {votes}</li>
              </>
            )}
            {username === author ? (
              <button
                className="delete-button"
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
  );
};

export default UserComments;
