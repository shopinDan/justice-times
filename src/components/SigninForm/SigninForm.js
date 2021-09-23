import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './SigninForm.scss'



export default function SigninForm () {
    const [form, setForm] = useState({
        fname:"",
        lname:"",
        email: "",
        password: ""
    })
    const history = useHistory();
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const handleSubmit =  (event) => {
        event.preventDefault();
        const userLocal = localStorage.getItem("users");
        let objUser =[];
        if(userLocal) {
            objUser = JSON.parse(userLocal);
        }
        objUser.push(form);
        localStorage.setItem("users", JSON.stringify(objUser));
        history.push('/login')
    }
    return (
        <div className="signin-form-wrapper">
            <h2>Create your free account</h2>
            <form onSubmit={handleSubmit}>
                <label>First name<br/>
                    <input type="text"  name='fname' onChange={changeHandler}/>
                </label>
                <label>Last name<br/>
                    <input type="text" name='lname' onChange={changeHandler} />
                </label>
                <label>Email Address<br/>
                    <input type="email" name='email' onChange={changeHandler} />
                </label>
                <label>Password<br/>
                    <input type="password" name='password' onChange={changeHandler} />
                </label>
                <input className='form-signin__btn' type='submit' value='Create Account'/>
            </form>
        </div>
    )
}