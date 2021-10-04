import './navlink.sass'
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function NavLinks({storageIsLogin, setStorageIsLogin, isFooter}) {
    const activeStyleHeader = {
        color: "#242424",
        borderBottom: "1px solid black",
        paddingBottom: "8px"
    }
    const activeStyleFooter ={
        color: "#FFFFFF",
        borderBottom: "1px solid white",
        paddingBottom: "8px"
    }

    useEffect(() => {
        localStorage.setItem('isLogin', JSON.stringify(storageIsLogin));
    }, [storageIsLogin])

    return (
        <nav>
            <ul
                className="nav-link__ul">
                <li>
                    <NavLink
                        exact
                        className={isFooter ? "links__footer" : "links__header"}
                        activeStyle={isFooter ? activeStyleFooter : activeStyleHeader}
                        to="/">All articles</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        className={isFooter ? "links__footer" : "links__header"}
                        activeStyle={isFooter ? activeStyleFooter : activeStyleHeader}
                        to="/my-articles">My articles</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        className={isFooter ? "links__footer" : "links__header"}
                        activeStyle={isFooter ? activeStyleFooter : activeStyleHeader}
                        to="/add-article">Add article</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        className={isFooter ? "links__footer" : "links__header"}
                        activeStyle={isFooter ? activeStyleFooter : activeStyleHeader}
                        to="/profile">Profile</NavLink>
                </li>
                <li>
                        <button
                            onClick={() => {setStorageIsLogin(false)}}>
                            Logout
                        </button>
                </li>
            </ul>
        </nav>
    );
}