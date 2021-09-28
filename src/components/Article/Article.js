import './Article.scss'

export default function Article({title, category, text, fname, lname}) {
    return (
        <div className="article">
            <div className="article__img">
                <img src="img/article_img.png" alt=""/>
            </div>
            <div className="card">
                <div className="card__tag"> #{category}</div>
                <h2>{title}</h2>
                <div className="card__text"  dangerouslySetInnerHTML={{__html: `${text}`}}/>
                <div className="card__info">
                    <div className="card__info__img"><img src="img/info_img.png" alt=""/></div>

                    <div className="card__info__name">{lname} {fname}</div>
                    <div className="card__info__date-time">Jun 13 · 5 min read</div>
                    <div className="card__info__watches"><i className="fas fa-eye"></i> 1690</div>
                </div>
            </div>
        </div>
    )
}