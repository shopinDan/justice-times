import React, { useState, useEffect } from 'react';
import axios from "axios";
import './SigninForm.scss'

export default function SigninForm () {

    const [form, setForm] = useState({
        fname:"",
        lname:"",
        email: "",
        password:"",
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/auth/register`, {...form})
            .then((res)=>{
                console.log('====>res<====', res)
            })
            .catch(err => console.log('====>err<====', err))
    }
    
    return (
        <div className="signin-form-wrapper">
            <h2>Create your free account</h2>
            <form
                onSubmit={handleSubmit}>
                <label>First name<br/>
                    <input
                        type="text"
                        name='fname'
                        onChange={changeHandler}/>
                </label>
                <label>Last name<br/>
                    <input
                        type="text"
                        name='lname'
                        onChange={changeHandler} />
                </label>
                <label>Email Address<br/>
                    <input
                        type="email"
                        name='email'
                        onChange={changeHandler} />
                </label>
                <label>Password<br/>
                    <input
                        type="password"
                        name='password'
                        onChange={changeHandler} />
                </label>
                <input
                    className='form-signin__btn'
                    type='submit'
                    value='Create Account'/>
            </form>
        </div>
    )
}