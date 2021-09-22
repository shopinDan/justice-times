import LastArticle from "../components/LastArticle/LastArticle";
import Article from "../components/Article/Article";
export default function MainPage() {

    return (
        <div style={{padding: "60px 0 110px 0"}}>
            <div className="container">
                <LastArticle/>
                <h1 style={{fontFamily:'Playfair Display',
                fontWeight: 'bold', fontSize:'48px',lineHeight:'48px', color: '#242424', marginBottom: '56px'}}>Popular articles</h1>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>

            </div>
        </div>

    );
}
