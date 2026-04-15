import { useEffect, useState } from "react";
import "../styles/listArticles.css";

function ListArticles() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/news/latest")
            .then((res) => res.json())
            .then((data) => setNews(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <section className="articles-section">
                <div className="title">
                    <h1>Últimos artículos</h1>
                    <p>
                        Mantente actualizado con las últimas noticias y
                        novedades del mundo de la tecnología y la electrónica.
                    </p>
                </div>
                <div className="news-contain">
                    {news.map((item) => (
                        <article key={item.id} className="news-article">
                            <span className="little">
                                <p className="category">{item.category}</p>
                                <time dateTime={item.fecha}>{item.fecha}</time>
                            </span>

                            <h3>{item.headline}</h3>
                            <p>{item.news}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ListArticles;
