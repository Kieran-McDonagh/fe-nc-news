import Login from './Login'

const NonUserComments = ({setUsername, comments}) => {
    return <div className='non-user-comments-section'>
   <Login setUsername={setUsername}/>
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
            <li className='comment-author'>{author}:</li>
            <li>"{body}"</li>
            <li>Posted: {formattedDate}</li>
            <li>Likes: {votes}</li>
          </ul>
        );
      })}
    </section>
  </div>
}

export default NonUserComments