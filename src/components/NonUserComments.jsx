import Login from './Login'

const NonUserComments = ({setUsername, comments}) => {
    return <div className='non-user-comments-section'>
   <Login setUsername={setUsername}/>
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
  </div>
}

export default NonUserComments