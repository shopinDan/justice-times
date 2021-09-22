import './navlink.sass'
import { NavLink, Link } from "react-router-dom";

export default function NavLinks() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeStyle={{
                        color: "#242424",
                        borderBottom: "1px solid black",
                        paddingBottom: "8px"

                    }} to="/">All articles</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{
                        color: "#242424",
                        borderBottom: "1px solid black",
                        paddingBottom: "8px"

                    }} to="/my-articles">My articles</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{
                        color: "#242424",
                        borderBottom: "1px solid black",
                        paddingBottom: "8px"

                    }} to="/add-article">Add article</NavLink>
                </li>
                <li>
                    <NavLink exact   activeStyle={{
                        color: "#242424",
                        borderBottom: "1px solid black",
                        paddingBottom: "8px"

                    }} to="/profile">Profile</NavLink>
                </li>
                <li>
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}