import './App.css'
import bannerImg from './assets/banner.png';
function App() {
    return (
    <>
        <main className="blog-posts">
            <article className="blog-posts__post">
                <div className="blog-posts__post--media">
                    <img loading="lazy" src={bannerImg}
                         className="blog-posts__post--img" alt="presentation"
                    />
                </div>

                <div className="blog-posts__post--create">
                    <p className="blog-posts__post--date">
                        {(() => {
                            const date = new Date();
                            date.setMonth(date.getMonth() - 2);
                            return date.toLocaleDateString()
                        })()}
                    </p>
                </div>


                <h2 className="blog-posts__post--title">
                    Meet AutoManage, the best AI management tools
                </h2>

                <p className="blog-posts__post--description">
                    Lorem, ipsum dolor sit amet consectetur adipiscing elit,
                    sed do Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </article>

            <article className="blog-posts__post">
                <div className="blog-posts__post--media">
                    <img loading="lazy" src={bannerImg}
                         className="blog-posts__post--img" alt="presentation"
                    />
                </div>
                <div className="blog-posts__post--create">
                    <p className="blog-posts__post--date">
                        {(() => {
                            const date = new Date();
                            date.setMonth(date.getMonth() - 4);
                            return date.toLocaleDateString()
                        })()}
                    </p>
                </div>
                <h2 className="blog-posts__post--title">
                    Meet AutoManage, the best AI management tools
                </h2>

                <p className="blog-posts__post--description">
                    Lorem, ipsum dolor sit amet consectetur adipiscing elit,
                    sed do Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </article>

            <article className="blog-posts__post">
                <div className="blog-posts__post--media">
                    <img loading="lazy" src={bannerImg}
                         className="blog-posts__post--img" alt="presentation"
                    />
                </div>
                <div className="blog-posts__post--create">
                    <p className="blog-posts__post--date">
                        {(() => {
                            const date = new Date();
                            date.setMonth(date.getMonth() - 6);
                            return date.toLocaleDateString()
                        })()}
                    </p>
                </div>

                <h2 className="blog-posts__post--title">
                    Meet AutoManage, the best AI management tools
                </h2>

                <p className="blog-posts__post--description">
                    Lorem, ipsum dolor sit amet consectetur adipiscing elit,
                    sed do Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </article>
            
        </main>
    </>
  )
}

export default App
