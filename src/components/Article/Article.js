import './Article.scss'

export default function Article() {
    return (
        <div className="article">
            <div className="article__img">
                <img src="img/article_img.png" alt=""/>
            </div>
            <div className="card">
                <div className="card__tag"> #Typography</div>
                <h2>Humane Typography in the Digital Age</h2>
                <div className="card__text">An Essay on Typography by Eric Gill takes the reader back to the year 1930.
                    The year when a conflict between two worlds came to its term. The machines of the industrial world
                    finally took over the handicrafts.
                </div>
                <div className="card__info">
                    <div className="card__info__img"><img src="img/info_img.png" alt=""/></div>

                    <div className="card__info__name">Janay Wright</div>
                    <div className="card__info__date-time">Jun 13 · 5 min read</div>
                    <div className="card__info__watches"><i className="fas fa-eye"></i> 1690</div>
                </div>
            </div>
        </div>
    )
}