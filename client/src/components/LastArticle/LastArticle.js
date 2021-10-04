import './LastArticle.scss'

export default function LastArticle({title, category, text, fname, lname}) {
    return (
        <div
            className="last__article">
            <div className="last__article__img">
                <img
                    src="img/last_article.png"
                    alt="Article img"/>
            </div>
            <div className="card">
                <div className="card__tag"> #{category}</div>
                <h2>{title}</h2>
                <div className="card__text">{text}
                </div>
                <div className="card__info">
                    <div className="card__info__img" >
                        <img src="img/info_img.png" alt=""/>
                    </div>
                    <div className="card__info__name">{lname} {fname}</div>
                    <div className="card__info__date-time">Jun 13 · 5 min read</div>
                    <div className="card__info__watches"> <i className="fas fa-eye"/> 1690</div>
                </div>
            </div>
        </div>
    )
}