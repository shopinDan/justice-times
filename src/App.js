import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import MyArticles from "./pages/MyArticles";
import Profile from "./pages/Profile";
import AddArticle from "./pages/AddArticle";
import Footer from "./components/footer/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Header isLogged={false}/>
                <Switch>
                    <Route exact path="/sigin">
                        <SignIn/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
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
                    <Route exact path="/sigin">
                        <SignIn/>
                    </Route>
                    <Redirect to={'/'} />
                </Switch>
                <Footer isLogged={true}/>
            </div>
        </Router>
    );
}

export default App;
