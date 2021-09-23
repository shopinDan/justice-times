import './UserCard.scss'

export default function UserCard() {
    return (
        <div className="user-card">
            <div className="user-card__img">
                <img src="img/user-img-my-articles.png" alt=""/>
            </div>
            <div className="user-card__name">Janay Wright</div>
            <div className="user-card__descr">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.</div>
        </div>
    );
}