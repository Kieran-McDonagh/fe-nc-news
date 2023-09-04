const ArticleCard = ({article}) => {
    return <div className="article-card">
        <img src={article.article_img_url} alt="" />
        <span className="article-title">{article.title}</span>
        <span className="article-author">Author: {article.author}</span>
        <span className="article-votes">Votes: {article.votes}</span>
    </div>
}

export default ArticleCard