import { Redirect, Route, Switch } from "react-router-dom";
import MyArticles from "../../pages/MyArticles";
import MainPage from "../../pages/MainPage";
import AddArticle from "../../pages/AddArticle";
import Profile from "../../pages/Profile";
import SignIn from "../../pages/SignIn";
import Login from "../../pages/Login";
import React from "react";

const ProtectedRoute = ({isLogged}) => {
    if (isLogged) {
        return (
            <Switch>
                <Route exact path="/my-articles">
                    <MyArticles/>
                </Route>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route exact path="/add-article">
                    <AddArticle/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Redirect to={'/'}/>
            </Switch>
        )
    } else {
        return(
            <Switch>
                <Route exact path="/sigin">
                    <SignIn/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Redirect to={'/'}/>
            </Switch>
        )
    }
}

export default ProtectedRoute