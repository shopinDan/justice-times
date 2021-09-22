import { Link } from "react-router-dom";
import './navbutton.sass'

export default function NavButton() {
    return (
        <div className="btn__wrapper">
            <Link to="/login">
                <button className="login__btn">Log in</button>
            </Link>
            <Link to="/sigin">
                <button className="sigin__btn">Sign in</button>
            </Link>
        </div>
    );
}