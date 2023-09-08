import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const createdAt = new Date(article.created_at);
  const formattedDate = createdAt.toISOString().split('T')[0];
  return (
    <div className="article-card">
      <Link key={article.article_id} to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} alt="article image thumbnail" />
      </Link>
      <span className="article-title">{article.title}</span>
      <span className="article-author">Author: {article.author}</span>
      <span>Posted: {formattedDate}</span>
      <span className="article-votes">Votes: {article.votes}</span>
      <span>comments: {article.comment_count}</span>
    </div>
  );
};

export default ArticleCard;
