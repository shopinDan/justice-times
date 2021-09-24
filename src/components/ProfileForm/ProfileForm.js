import './ProfileForm.scss'
import { useEffect, useRef, useState } from "react";


export default function ProfileForm() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
    const [loginUser,] = useState(JSON.parse(localStorage.getItem("email")));



    const [form, setForm] = useState({
        fname: users.filter(item=> item.email === loginUser)[0].fname,
        lname: users.filter(item=> item.email === loginUser)[0].lname,
        description: users.filter(item=> item.email === loginUser)[0].description});


    const changeHandler = (event) => {

        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setUsers(users.map(item => {
            if (item.email === loginUser) {
                item.fname = form.fname;
                item.lname = form.lname;
                item.description = form.description;
            }
            return item;
        }));
    }
    useEffect(()=> {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users])

    return (
        <div className="profile-form">
            <form onSubmit={handleSubmit}>
                <div className="profile-form__foto">
                    <div className="profile-form__img">
                        <img src="img/no_avatar.png" alt=""/>
                    </div>
                    <input type="file" style={{display:"none"}}/>
                    <button>Upload</button>
                </div>
                <div className="profile-form__info">
                    <label>First name<br/>
                        <input type="text" value={form.fname} name="fname" onChange={changeHandler}/>
                    </label>
                    <label>Last name<br/>
                        <input type="text" value={form.lname}  name="lname" onChange={changeHandler}/>
                    </label>
                    <label>Description<br/>
                        <textarea  value={form.description} name="description" onChange={changeHandler}/>
                    </label>
                    <br/>
                    <input className='profile-form__btn' type='submit' value='Set Account'/>
                </div>
            </form>
        </div>
    );
}