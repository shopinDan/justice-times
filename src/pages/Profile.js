import ProfileForm from "../components/ProfileForm/ProfileForm";

export default function Profile() {
    return (
        <div className="page__padding">
            <div className="container">
                <h2 style={{
                    fontFamily: 'Playfair Display',
                    fontWeight: 'bold',
                    fontSize: '56px',
                    lineHeight: '56px',
                    color: '#242424',
                    marginBottom: '64px'
                }}>Profile</h2>
                <ProfileForm/>
            </div>
        </div>

    )
}