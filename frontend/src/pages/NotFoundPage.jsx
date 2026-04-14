import "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/not-found.css";
import "../index.css";

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div className="not-found">
                <p className="notfound-message">Esta página no existe</p>
                <div className="button-container">
                    <Button to="/" text="Volver" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;
