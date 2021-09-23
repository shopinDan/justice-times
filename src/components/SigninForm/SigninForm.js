import './SigninForm.scss'


export default function SigninForm () {
    return (
        <div className="signin-form-wrapper">
            <h2>Create your free account</h2>
            <form>
                <label>First name<br/>
                    <input type="text" />
                </label>
                <label>Last name<br/>
                    <input type="text" />
                </label>
                <label>Email Address<br/>
                    <input type="email" />
                </label>
                <label>Password<br/>
                    <input type="password" />
                </label>
                <input className='form-signin__btn' type='submit' value='Create Account'/>
            </form>
        </div>
    )
}