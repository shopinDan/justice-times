import NavLinks from "../navLink/NavLink";
import NavButton from "../navButton/NavButton";

export default function Footer(props) {
    const isLoggedIn = props.isLogged;
    return (
        <footer>
            <div className="container">
                <img src="img/Logo.png" alt="Logo"/>
                {isLoggedIn ? <NavLinks/> : <NavButton/>}
            </div>
        </footer>
    );

}