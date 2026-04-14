import "react";
import Header from "../components/Header";
import ListArticles from "../components/ListAricles";
import Footer from "../components/Footer";
import "../index.css";

const HomePage = () => {
    return (
        <>
            <Header />
            <ListArticles />

            <Footer />
        </>
    );
};

export default HomePage;
