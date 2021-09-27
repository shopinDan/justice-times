import UserCard from "../components/UserCard/UserCard";
import MyArticle from "../components/MyArticle/MyArticle";

import { useState } from "react";

export default function MyArticles() {

    const [localUsers, ] = useState(JSON.parse(localStorage.getItem("users")));
    const [loginUser, ] = useState(JSON.parse(localStorage.getItem("email")));
    const [loginUserArticle] = useState(localUsers.filter(item=> item.email === loginUser)[0])

    return (
        <div className='page__padding'>
            <div className="container">
                <div style={{display: 'flex'}}>
                    <UserCard/>
                    <div>
                        {loginUserArticle.articles.map((item, key) => (
                            <MyArticle
                                key={key}
                                title={item.title}
                                category={item.category}
                                text={item.text}
                                fname={loginUserArticle.fname}
                                lname={loginUserArticle.lname}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}