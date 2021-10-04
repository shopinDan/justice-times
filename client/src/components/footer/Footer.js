import NavLinks from "../navLink/NavLink";
import NavButton from "../navButton/NavButton";
import './footer.sass'

export default function Footer({storageIsLogin, setStorageIsLogin}) {

    return (
        <footer>
            <div className="container">
                <div className="navigation">
                    <img src="img/Logo-footer.png" alt="Logo"/>
                    { storageIsLogin ?
                        <NavLinks
                            storageIsLogin={storageIsLogin}
                            setStorageIsLogin={setStorageIsLogin}
                            isFooter={true} /> :
                        <NavButton
                            isFooter={true} />}
                </div>
                <div className="footer__signature">
                    <p>© 2021 Justice-it. All rights reserved.</p>
                    <p>© 2021 Justice-it. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );

}