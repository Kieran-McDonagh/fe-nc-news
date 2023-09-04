import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
    return <div className="article-card">
        <Link key={article.article_id} to={`/articles/${article.article_id}`}> 
        <img src={article.article_img_url} alt="article image thumbnail" /></Link>
        <span className="article-title">{article.title}</span>
        <span className="article-author">Author: {article.author}</span>
        <span className="article-votes">Votes: {article.votes}</span>
    </div>
}

export default ArticleCard