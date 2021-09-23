import NavButton from "../navButton/NavButton";
import NavLinks from "../navLink/NavLink";
import './header.sass'
import { Link } from "react-router-dom";

export default function Header(props) {
    const isLoggedIn = props.isLogged;
    return (
        <header>
            <div className="container container__header">
                <Link to="/"><img src="img/Logo.png" alt="Logo"/></Link>

                {isLoggedIn ? <NavLinks/> : <NavButton/>}
            </div>
        </header>
    );
}