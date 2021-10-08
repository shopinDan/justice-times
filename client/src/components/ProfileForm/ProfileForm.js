import './ProfileForm.scss'
import { useEffect, useState } from "react";
import axios from "axios";





export default function ProfileForm() {


    const [userId, ] = useState(localStorage.getItem('userId'));
    const [token, ] = useState(localStorage.getItem('token'));

    const [form, setForm] = useState({
        fname: '',
        lname: '',
        description: ''});

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/profile/${userId}`, { headers: {"Authorization" : token}})
            .then(res=>setForm({
                fname: res.data.fname,
                lname: res.data.lname,
                description: res.data.description}))
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.patch(`http://localhost:5000/api/profile/${userId}`, {...form}, { headers: {"Authorization" : token}})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div className="profile-form">
            <form onSubmit={handleSubmit}>
                <div className="profile-form__foto">
                    <div className="profile-form__img">
                        <img
                            src="img/no_avatar.png"
                            alt=""/>
                    </div>
                    <input
                        type="file"
                        style={{display:"none"}}/>
                    <button>Upload</button>
                </div>
                <div className="profile-form__info">
                    <label>First name<br/>
                        <input
                            type="text"
                            value={form.fname}
                            name="fname"
                            onChange={changeHandler}/>
                    </label>
                    <label>Last name<br/>
                        <input
                            type="text"
                            value={form.lname}
                            name="lname"
                            onChange={changeHandler}/>
                    </label>
                    <label>Description<br/>
                        <textarea
                            value={form.description}
                            name="description"
                            onChange={changeHandler}/>
                    </label>
                    <br/>
                    <input
                        className='profile-form__btn'
                        type='submit'
                        value='Set Account'/>
                </div>
            </form>
        </div>
    );
}