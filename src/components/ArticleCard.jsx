import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const createdAt = new Date(article.created_at);
  const formattedDate = createdAt.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  return (
    <div className="article-card">
      <span className="article-card-title">{article.title}</span>
      <Link key={article.article_id} to={`/articles/${article.article_id}`}>
        <img className="article-card-img" src={article.article_img_url} alt="article image thumbnail" />
      </Link>
      <span className="article-card-author">Author: {article.author}</span>
      <span className="article-card-date">Posted: {formattedDate}</span>
      <span className="article-card-votes">Likes: {article.votes}</span>
      <span className="article-card-comments">comments: {article.comment_count}</span>
    </div>
  );
};

export default ArticleCard;
