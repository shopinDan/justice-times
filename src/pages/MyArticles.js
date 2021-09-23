import UserCard from "../components/UserCard/UserCard";
import MyArticle from "../components/MyArticle/MyArticle";

export default function MyArticles() {
    return (
        <div className='page__padding'>
            <div className="container">
                <div style={{display: 'flex'}}>
                    <UserCard/>
                    <div><MyArticle/>
                        <MyArticle/>
                        <MyArticle/>
                        <MyArticle/>
                        {/*<MyArticle/>*/}
                        {/*<MyArticle/>*/}
                        {/*<MyArticle/>*/}
                        {/*<MyArticle/>*/}
                    </div>

                </div>

            </div>
        </div>
    );
}