import React, { useState, useEffect } from 'react';
import './LoginForm.scss'
import { Link, useHistory } from "react-router-dom";

export default function  LoginForm () {
    const [storageUsers,] = useState(JSON.parse(localStorage.getItem("users")));
    const [form, setForm] = useState({email:"", password:""});
    const [isSignIn, changeIsSignIng] = useState(false);

    useEffect(key=>{
        localStorage.setItem('isLogin', JSON.stringify(isSignIn));
        localStorage.setItem('email', JSON.stringify(form.email));
        }, [isSignIn])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        storageUsers.forEach(item =>
            item.email === form.email && item.password === form.password ?
                changeIsSignIng(true): null);
    }

    return (
        <div className="login-form-wrapper">
            <h2>Log in to your account</h2>
            <form
                onSubmit={handleSubmit}
            >
                <label>Email Address<br/>
                    <input
                        type="text"
                        name="email"
                        onChange={changeHandler}
                    />
                </label>
                <label>Password <br/>
                    <input
                        type="password"
                        name="password"
                        onChange={changeHandler}
                    />
                </label>
                <input
                    className='form-login__btn'
                    type='submit'
                    value='Log in Account'/>
            </form>
            <div className="create-account">
                Don’t have a Times account? <Link to='/sigin'>Create one</Link>
            </div>
        </div>
    );
}