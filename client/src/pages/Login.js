import LoginForm from "../components/LoginForm/LoginForm";

export default function Login({storageIsLogin, setStorageIsLogin}) {
    return (
        <div style={{padding:"80px 0 281px"}}>
            <div className="container">
                <LoginForm storageIsLogin={storageIsLogin} setStorageIsLogin={setStorageIsLogin}/>
            </div>
        </div>
    )
}