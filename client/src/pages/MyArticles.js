import UserCard from "../components/UserCard/UserCard";
import MyArticle from "../components/MyArticle/MyArticle";

import { useEffect, useState } from "react";
import axios from "axios";
export default function MyArticles() {

    // const [localUsers, ] = useState(localStorage.getItem("users"));
    // const [loginUser, ] = useState(localStorage.getItem("email"));
    // const [loginUserArticle] = useState(localUsers.filter(item=> item.email === loginUser)[0]);

    const [userInfo, setUserInfo ] = useState({})
    const [myArticles, setMyArticles] = useState([])

    const [userId, ] = useState(localStorage.getItem('userId'))
    const [token, ] = useState(localStorage.getItem('token'))

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/articles`)
            .then(res => setMyArticles())
    },[])

    console.log('====>userId<====', userId)
    console.log('====>token<====', token)

    return (
        <div className='page__padding'>
            <div className="container">
                <div style={{display: 'flex'}}>
                    {/*<UserCard/>*/}
                    <div>
                        {/*{loginUserArticle.articles.map((item, key) => (*/}
                        {/*    <MyArticle*/}
                        {/*        key={key}*/}
                        {/*        title={item.title}*/}
                        {/*        category={item.category}*/}
                        {/*        text={item.text}*/}
                        {/*        fname={loginUserArticle.fname}*/}
                        {/*        lname={loginUserArticle.lname}*/}
                        {/*    />*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
        </div>
    );
}