import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    const [storageIsLogin, setStorageIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')) ?
        JSON.parse(localStorage.getItem('isLogin')) : false )
    useEffect(()=> {
        JSON.stringify(localStorage.setItem('isLogin', storageIsLogin))
    }, [storageIsLogin])

    return (
        <Router>
            <div>
                <Header storageIsLogin={storageIsLogin} setStorageIsLogin={setStorageIsLogin}/>
                <ProtectedRoute storageIsLogin={storageIsLogin} setStorageIsLogin={setStorageIsLogin}/>
                <Footer storageIsLogin={storageIsLogin} setStorageIsLogin={setStorageIsLogin}/>
            </div>
        </Router>
    );
}

export default App;
