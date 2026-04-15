import { useEffect, useState } from "react";
import "../styles/listArticles.css";

function MoreArticles() {
    const [news, setNews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/api/news")
            .then((res) => res.json())
            .then((data) => setNews(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="articles-section">
            <button
                onClick={() => setShowAll((prev) => !prev)}
                className="more-btn"
            >
                {showAll ? "Ocultar artículos" : "Más artículos"}
            </button>
            {showAll && (
                <div className="news-contain">
                    {news.map((item) => (
                        <article key={item.id} className="news-article">
                            <div className="little">
                                <p className="category">{item.category}</p>
                                <time dateTime={item.fecha}>{item.fecha}</time>
                            </div>

                            <h3>{item.headline}</h3>
                            <p>{item.news}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default MoreArticles;
