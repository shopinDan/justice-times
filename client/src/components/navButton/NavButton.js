import { Link } from "react-router-dom";
import './navbutton.sass'

export default function NavButton({isFooter}) {
    return (
        <div className="btn__wrapper">
            <Link  to="/login">
                <button
                    className={isFooter ? "login__btn login__btn__footer": "login__btn"}>Log in</button>
            </Link>
            <Link to="/sigin">
                <button
                    className={isFooter ? "sigin__btn sigin__btn__footer" : "sigin__btn"}>Sign in</button>
            </Link>
        </div>
    );
}