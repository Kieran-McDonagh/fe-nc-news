import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import {getAllArticles} from './api-utils'

const AllArticles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
       getAllArticles().then(({articles}) => {
        setArticles(articles);
       })
    }, [])

return <section className="articles-list">
    {articles.map((article) => {
        return  <ArticleCard key={article.article_id} article={article}/>
    })}
</section>
}

export default AllArticles