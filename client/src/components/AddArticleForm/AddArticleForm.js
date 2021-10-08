import React, {useState, useEffect} from 'react';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


import './AddArticleForm.scss';
import 'draft-js/dist/Draft.css';
import axios from "axios";


function AddArticleForm() {

    const [form, setForm] = useState({
        title: "",
        category: "",
        description: "",
    })

    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );

    const [token, ] = useState(localStorage.getItem('token'));

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form', {...form})
        axios.post('http://localhost:5000/api/articles', {...form},{headers: {"Authorization": token}})
            .then((res =>console.log('res', res) ))
            .catch(err=> console.log('err', err))

    }

    useEffect(()=>{
        setForm((prevState => ({
            ...prevState, description: draftToHtml(convertToRaw(editorState.getCurrentContent()))
        })));
    }, [editorState])

    const changeHandler = (event) => {
        const {value, name} = event.target;

        if (name === 'title') {
            setForm(((prevState => ({
                ...prevState,
                title: value
            }))))
        } else {
            setForm((prevState => ({
                ...prevState, category: value,
            })))
        }
    }


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
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        placeholder="Enter the text..."
                        onEditorStateChange={(e) => {
                            setEditorState(e);
                        }}
                    />
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