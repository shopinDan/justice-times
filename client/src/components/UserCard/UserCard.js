import './UserCard.scss'
import { useState } from "react";

export default function UserCard({fname, lname, description}) {

    return (
        <div className="user-card">
            <div className="user-card__img">
                <img src="img/user-img-my-articles.png" alt=""/>
            </div>
            <div className="user-card__name">{fname} {lname}</div>
            <div className="user-card__descr">{description}</div>
        </div>
    );
}