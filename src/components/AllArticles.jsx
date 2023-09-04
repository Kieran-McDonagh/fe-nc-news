import { useEffect, useState } from "react"
import axios from 'axios'
import ArticleCard from "./ArticleCard"

const AllArticles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('https://news-api-rist.onrender.com/api/articles').then(({data: {articles}}) => {
    setArticles(articles)
})
    }, [])

return <section className="articles-list">
    {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article}/>
    })}
</section>
}

export default AllArticles