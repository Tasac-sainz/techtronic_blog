import "react";
import Header from "../components/Header";
import ListArticles from "../components/ListArticles";
import Footer from "../components/Footer";
import Weather from "../components/Weather";
import MoreArticles from "../components/MoreArticles";
import ListCategories from "../components/ListCategories";
import "../index.css";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="main">
                <ListArticles />
                <aside className="weather-aside">
                    <Weather />
                    <ListCategories />
                </aside>
            </div>
            <MoreArticles />
            <Footer />
        </>
    );
};

export default HomePage;
