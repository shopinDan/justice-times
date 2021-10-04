import React, { useState, useEffect } from 'react';
import axios from "axios";
import './LoginForm.scss'
import { Link } from "react-router-dom";


export default function  LoginForm ({storageIsLogin, setStorageIsLogin}) {
    const [form, setForm] = useState({email:"", password:""});

    useEffect(key=>{
        localStorage.setItem('isLogin', JSON.stringify(storageIsLogin));
        }, [storageIsLogin])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/auth/login`, {...form})
            .then(res => {
                console.log('====>res<====', res);
                JSON.stringify(localStorage.setItem('token', res.data.token));
                JSON.stringify(localStorage.setItem('userId', res.data.userId));
                setStorageIsLogin(true)
            })
            .catch( err=> console.log('====>err<====', err))
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