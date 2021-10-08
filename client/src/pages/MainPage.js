import LastArticle from "../components/LastArticle/LastArticle";
import Article from "../components/Article/Article";

import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage() {

    const [articles, setArticles] = useState([])

    useEffect(()=>{
            axios.get(`http://localhost:5000/api/articles`)
                .then((res)=> {
                    setArticles(res.data)
                })
                .catch(err=>console.log(err))
    }, [])

    return (
        <div className="page__padding">
            <div className="container">
                {/*<LastArticle*/}
                {/*    title={localUsers[0].articles[localUsers[0].articles.length-1].title}*/}
                {/*    category={localUsers[0].articles[localUsers[0].articles.length-1].category}*/}
                {/*    text={localUsers[0].articles[localUsers[0].articles.length-1].text}*/}
                {/*    fname={localUsers[0].fname}*/}
                {/*    lname={localUsers[0].lname}*/}
                {/*/>*/}
                <h1 style={{
                    fontFamily:'Playfair Display',
                    fontWeight: 'bold',
                    fontSize:'48px',
                    lineHeight:'48px',
                    color: '#242424',
                    marginBottom: '56px'
                }}>Popular articles</h1>
                {articles.map((article)=> (
                        <Article
                            id={article._id}
                            key={article._id}
                            title={article.title}
                            category={article.category}
                            text={article.description}
                            views={article.views}
                        />
                ))}
            </div>
        </div>

    );
}
