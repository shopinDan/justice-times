import Article from "../components/Article/Article";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function ArticlePage() {
    const {id} = useParams()
    const [article, setArticle] = useState({})
    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.patch(`http://localhost:5000/api/articles/${id}`)
            .then(res=>setArticle(res.data))

    }, [])
    console.log(article)
    return (
        <Article
            title={article.title}
            category={article.category}
            text={article.description}
            views={article.views}

        />
        )
}