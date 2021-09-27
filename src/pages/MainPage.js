import LastArticle from "../components/LastArticle/LastArticle";
import Article from "../components/Article/Article";

import { useState} from "react";

export default function MainPage() {
    const [localUsers, ] = useState(JSON.parse(localStorage.getItem("users")));
    return (
        <div className="page__padding">
            <div className="container">
                <LastArticle
                    title={localUsers[0].articles[localUsers[0].articles.length-1].title}
                    category={localUsers[0].articles[localUsers[0].articles.length-1].category}
                    text={localUsers[0].articles[localUsers[0].articles.length-1].text}
                    fname={localUsers[0].fname}
                    lname={localUsers[0].lname}
                />
                <h1 style={{
                    fontFamily:'Playfair Display',
                    fontWeight: 'bold',
                    fontSize:'48px',
                    lineHeight:'48px',
                    color: '#242424',
                    marginBottom: '56px'
                }}>Popular articles</h1>
                {localUsers.map((user)=> (
                    user.articles.map((article, key)=>(
                        <Article
                            key={key}
                            title={article.title}
                            category={article.category}
                            text={article.text}
                            fname={user.fname}
                            lname={user.lname}
                        />
                    ))
                ))}
            </div>
        </div>

    );
}
