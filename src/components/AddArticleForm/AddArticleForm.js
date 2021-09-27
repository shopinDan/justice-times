import React, {useState, useEffect} from 'react';
import './AddArticleForm.scss'


function AddArticleForm() {

    const [form, setForm] = useState({
        title: "",
        category: "",
        text: "",
    })
    const [loginUser,] = useState(JSON.parse(localStorage.getItem("email")));
    const [usersLocal, setUserLocal] = useState(localStorage.getItem("users") ?
        JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserLocal(usersLocal.map(item => {
            if (item.email === loginUser) {
                item.articles.push(form);
            }
            return item;
        }))
    }

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    useEffect(()=> {
        localStorage.setItem("users", JSON.stringify(usersLocal))
    }, [usersLocal])
    
    return (
            <div className="add-article-form__wrapper">
                <h2>Add article</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter a title"
                        onChange={changeHandler}/>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter the category name..."
                        onChange={changeHandler}/>
                    <textarea
                        name="text"
                        placeholder="Enter the text..."
                        onChange={changeHandler}/>
                    <input
                        className="sub__btn"
                        type="submit"
                        value="Publish an article"/>
                </form>
            </div>
    )
        ;
}

export default AddArticleForm;