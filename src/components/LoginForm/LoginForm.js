import React, { useState } from 'react';
import './LoginForm.scss'
import { Link, useHistory } from "react-router-dom";

export default function  LoginForm () {
    const [form, setForm] = useState({email:"", password:""});
    const history = useHistory();


    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
      const storageUsers = JSON.parse(localStorage.getItem("users"));
      let isSignIn = false;
      storageUsers.forEach(item => item.email === form.email && item.password === form.password ? isSignIn = true: null);
      if (isSignIn) {
          localStorage.setItem("isLogin", JSON.stringify(true));
          history.push('/');
      }
    }
    return (
        <div className="login-form-wrapper">
            <h2>Log in to your account </h2>
            <form onSubmit={handleSubmit}>
                <label>Email Address<br/>
                    <input type="text" name="email" onChange={changeHandler}/>
                </label>
                <label>Password <br/>
                    <input type="password" name="password" onChange={changeHandler}/>
                </label>
                <input className='form-login__btn' type='submit' value='Log in Account'/>
            </form>
            <div className="create-account">
                Don’t have a Times account? <Link to='/sigin'>Create one</Link>
            </div>
        </div>
    );
}