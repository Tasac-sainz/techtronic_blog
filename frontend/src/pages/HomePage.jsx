import "react";
import Header from "../components/Header";
import ListArticles from "../components/ListAricles";
import Footer from "../components/Footer";
import Weather from "../components/Weather";
import "../index.css";

const HomePage = () => {
    return (
        <>
            <Header />
            <ListArticles />
            <Weather />

            <Footer />
        </>
    );
};

export default HomePage;
