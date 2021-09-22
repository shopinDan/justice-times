import NavButton from "../navButton/NavButton";
import NavLinks from "../navLink/NavLink";
import './header.sass'

export default function Header(props) {
    const isLoggedIn = props.isLogged;
    return (
        <header>
            <div className="container container__header">
                <img src="img/Logo.png" alt="Logo"/>
                {isLoggedIn ? <NavLinks/> : <NavButton/>}
            </div>
        </header>
    );
}