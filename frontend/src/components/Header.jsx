import "react";
import { Link } from "react-router-dom";
import Logo from "../images/storm.png";
import "../styles/header.css";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <img src={Logo} alt="Logo" />
                    <p className="corp-text">Blog de TechTronic</p>
                </div>

                <nav className="nav-text">
                    <a href="#">Inicio</a>
                    <a href="#">Blog</a>
                    <a href="#">Productos</a>
                    <a href="#">Sobre nosotros</a>
                    <a href="#">Contacto</a>
                    <a href="#" className="shop-btn">
                        Tienda
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Header;
