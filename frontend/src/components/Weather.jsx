import { useEffect, useState } from "react";
import getWeather from "../services/api";
import CityFilter from "./CityFilter";

function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Madrid");

    useEffect(() => {
        getWeather(city)
            .then((data) => {
                setWeather(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [city]);

    if (!weather) return <p>Cargando...</p>;

    return (
        <>
            <CityFilter onCitySubmit={setCity} />
            <div className="weather-widget">
                <h3>{weather.name}</h3>

                <p>{Math.round(weather.main.temp)}°C</p>

                <p style={{ textTransform: "capitalize" }}>
                    {weather.weather[0].description}
                </p>

                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="icono clima"
                />
            </div>
        </>
    );
}

export default Weather;
