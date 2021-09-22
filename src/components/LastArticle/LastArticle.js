import './LastArticle.scss'

export default function LastArticle() {
    return (
        <div className="last__article">
            <div className="last__article__img">
                <img src="img/last_article.png" alt=""/>
            </div>
            <div className="card">
                <div className="card__tag"> #Typography</div>
                <h2>Humane Typography in the Digital Age</h2>
                <div className="card__text">Human beings aren’t perfect. Perfection is something that will always elude
                    us.
                    There will always be a small part of humanity in everything we do. No matter how small that part, we
                    should make sure that it transcends the limits of the medium. We have to think about the message
                    first. What typeface should we use and why? Does the typeface match the message and what?
                </div>
                <div className="card__info">
                    <div className="card__info__img" ><img src="img/info_img.png" alt=""/></div>

                    <div className="card__info__name">Janay Wright</div>
                    <div className="card__info__date-time">Jun 13 · 5 min read</div>
                    <div className="card__info__watches"><i className="fas fa-eye"></i> 1690</div>
                </div>
            </div>
        </div>
    )
}