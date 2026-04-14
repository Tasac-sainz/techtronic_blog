import "react";
import "../styles/listArticles.css";

const ListArticles = () => {
    return (
        <>
            <div className="list-articles">
                <h2>Artículos Recientes</h2>
                <ul>
                    <li>
                        <h3>
                            Cómo elegir el mejor hardware para tu PC de gaming
                        </h3>
                        <p>
                            Descubre los componentes esenciales para construir
                            una PC de gaming potente y eficiente.
                        </p>
                    </li>
                    <li>
                        <h3>Las mejores tarjetas gráficas del año</h3>
                        <p>
                            Analizamos las tarjetas gráficas más populares y
                            potentes del mercado para ayudarte a tomar la mejor
                            decisión.
                        </p>
                    </li>
                    <li>
                        <h3>Los mejores portátiles para trabajar en 2026</h3>
                        <p>
                            Descubrimos los portátiles más eficientes y
                            equilibrados del mercado, ideales para
                            productividad, diseño y desarrollo.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ListArticles;
