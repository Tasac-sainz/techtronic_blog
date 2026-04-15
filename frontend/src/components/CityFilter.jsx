import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/cityFilter.css";

const CityFilter = ({ onCitySubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (ev) => {
        setInputValue(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onCitySubmit(inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className="city-form">
            <input
                type="text"
                placeholder="Ingrese una ciudad"
                value={inputValue}
                onChange={handleChange}
                className="city-input"
            />
            <button type="submit" className="city-button">
                🔍
            </button>
        </form>
    );
};

export default CityFilter;

CityFilter.propTypes = {
    onCitySubmit: PropTypes.func.isRequired,
};
