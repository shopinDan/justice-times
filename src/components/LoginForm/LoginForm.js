import './LoginForm.scss'
import { Link } from "react-router-dom";

export default function  LoginForm () {
    return (
        <div className="login-form-wrapper">
            <h2>Log in to your account </h2>
            <form>
                <label>Email Address<br/>
                    <input type="text" />
                </label>
                <label>Password <br/>
                    <input type="password" />
                </label>
                <input className='form-login__btn' type='submit' value='Log in Account'/>
            </form>
            <div className="create-account">
                Don’t have a Times account? <Link to='/sigin'>Create one</Link>
            </div>
        </div>
    );
}