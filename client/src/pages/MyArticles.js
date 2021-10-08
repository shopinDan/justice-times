import UserCard from "../components/UserCard/UserCard";
import MyArticle from "../components/MyArticle/MyArticle";

import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
export default function MyArticles() {

    const [userInfo, setUserInfo ] = useState({});
    const [myArticles, setMyArticles] = useState([]);

    const [userId, ] = useState(localStorage.getItem('userId'));
    const [token, ] = useState(localStorage.getItem('token'));

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/profile/${userId}`, { headers: {"Authorization" : token}})
            .then(res=>setUserInfo(res.data))
            .then(()=>{
                axios.get(`http://localhost:5000/api/articles`)
                    .then(res => setMyArticles(res.data.filter(article => article.user == userId)))
            })
    },[])

    return (
        <div className='page__padding'>
            <div className="container">
                <div style={{display: 'flex'}}>
                    <UserCard
                        fname={userInfo.fname} lname={userInfo.lname} description={userInfo.description}/>
                    <div>
                        {myArticles.map((article) => (
                                <MyArticle
                                    key={article._id}
                                    title={article.title}
                                    category={article.category}
                                    description={article.description}
                                    views={article.views}
                                    fname={userInfo.fname}
                                    lname={userInfo.lname}
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}