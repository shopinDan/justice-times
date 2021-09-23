import './ProfileForm.scss'


export default function ProfileForm() {
    return (
        <div className="profile-form">
            <form>
                <div className="profile-form__foto">
                    <div className="profile-form__img">
                        <img src="img/no_avatar.png" alt=""/>
                    </div>
                    <input type="file" style={{display:"none"}}/>
                    <button>Upload</button>
                </div>
                <div className="profile-form__info">
                    <label>First name<br/>
                        <input type="text" />
                    </label>
                    <label>Last name<br/>
                        <input type="text" />
                    </label>
                    <label>Description<br/>
                        <textarea  />
                    </label>
                    <br/>
                    <input className='profile-form__btn' type='submit' value='Create Account'/>
                </div>
            </form>
        </div>
    );
}