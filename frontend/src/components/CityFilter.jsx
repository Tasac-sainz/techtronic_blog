import { useState } from "react";
import PropTypes from "prop-types";

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
        <div className="city-filter">
            <form onSubmit={handleSubmit} className="city-form">
                <input
                    type="text"
                    placeholder="Ingrese una ciudad"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default CityFilter;

CityFilter.propTypes = {
    onCitySubmit: PropTypes.func.isRequired,
};
