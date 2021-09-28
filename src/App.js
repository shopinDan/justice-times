import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

    const storageLogin = JSON.parse(localStorage.getItem('isLogin'));
    let isLogin;
    !storageLogin || storageLogin===false ? isLogin = false : isLogin = true;

    return (
        <Router>
            <div>
                <Header isLogged={isLogin}/>
                <ProtectedRoute isLogged={isLogin} />
                <Footer isLogged={isLogin}/>
            </div>
        </Router>
    );
}

export default App;
