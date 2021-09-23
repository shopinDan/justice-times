import LastArticle from "../components/LastArticle/LastArticle";
import Article from "../components/Article/Article";
export default function MainPage() {
    const arrArticle = [1, 2, 3, 4];
    return (
        <div className="page__padding">
            <div className="container">
                <LastArticle/>
                <h1 style={{fontFamily:'Playfair Display',
                fontWeight: 'bold', fontSize:'48px',lineHeight:'48px', color: '#242424', marginBottom: '56px'}}>Popular articles</h1>
                {arrArticle.map((number)=>
                    <Article key={number}/>)}
            </div>
        </div>

    );
}
