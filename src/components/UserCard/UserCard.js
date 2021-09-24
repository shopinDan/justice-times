import './UserCard.scss'
import { useState } from "react";

export default function UserCard() {
    const [users,] = useState(JSON.parse(localStorage.getItem("users")));
    const  [loginUser,] = useState(JSON.parse(localStorage.getItem("email")));
    const [userCard,] = useState({
        fname: users.filter(item => item.email ===loginUser)[0].fname,
        lname: users.filter(item=> item.email === loginUser)[0].lname,
        description: users.filter(item=> item.email === loginUser)[0].description
    });

    return (
        <div className="user-card">
            <div className="user-card__img">
                <img src="img/user-img-my-articles.png" alt=""/>
            </div>
            <div className="user-card__name">{userCard.fname} {userCard.lname}</div>
            <div className="user-card__descr">{userCard.description}</div>
        </div>
    );
}