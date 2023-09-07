
import { useState } from "react"
import AllArticles from "./AllArticles"
import Topics from "./Topic"
import { useSearchParams } from 'react-router-dom';


const Home = () => {
    const [topic, setTopic] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    return <>  
     <Topics setTopic={setTopic} setSearchParams={setSearchParams}/>
    <AllArticles topic={topic} searchParams={searchParams}/>
 
    </>
}

export default Home