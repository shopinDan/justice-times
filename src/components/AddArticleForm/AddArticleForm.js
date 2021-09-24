import React, {useState, useEffect} from 'react';
import './AddArticleForm.scss'


function AddArticleForm() {

    const [form, setForm] = useState({
        title: "",
        category: "",
        text: ""
    })

    const [loginUser,] = useState(JSON.parse(localStorage.getItem("email")));

    const [userLocal, setUserLocal] = useState(localStorage.getItem("users") ?
        JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('====>"submit"<====', "submit")
    }

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }
    return (
            <div className="add-article-form__wrapper">
                <h2>Add article</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" onChange={changeHandler}/>
                    <input type="text"  name="category" onChange={changeHandler}/>
                    <textarea name="text" onChange={changeHandler}/>
                    <input  className="sub__btn" type="submit" value="Publish an article"/>
                </form>
            </div>
    )
        ;
}

export default AddArticleForm;