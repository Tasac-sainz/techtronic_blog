import { useEffect, useState } from "react";
import getWeather from "../services/api";
import CityFilter from "./CityFilter";
import "../styles/weather.css";

function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");

    // CASO 1: NO hay ciudad, se pide ubicación actual
    useEffect(() => {
        if (city) return; // Si hay ciudad, no se pide ubicación actual

        navigator.geolocation.getCurrentPosition(
            // Recurre a la API de geolocalización del navegador
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const data = await getWeather(latitude, longitude);
                    setWeather(data);
                } catch {
                    setError("No se pudo obtener ubicación actual.");
                }
            },
            () => {
                setError("No se pudo obtener ubicación actual.");
            },
        );
    }, [city]);

    // CASO 2: Hay ciudad, se obtiene clima de esa ciudad

    useEffect(() => {
        if (!city) return; // Si no hay ciudad, no se hace nada

        const fetchCityWeather = async () => {
            try {
                const data = await getWeather(city);
                setWeather(data);
            } catch {
                setError("No se pudo obtener el clima de la ciudad.");
            }
        };

        fetchCityWeather();
    }, [city]);

    if (error) return <p>{error}</p>;
    if (!weather) return <p>Cargando...</p>;

    const now = new Date();

    const formattedDateTime = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(now);

    return (
        <>
            <span className="weather-cont">
                <CityFilter onCitySubmit={setCity} />
                <aside className="weather-widget">
                    <h3 className="city-name">{weather.name}</h3>
                    <p className="small-widget-data">{formattedDateTime}</p>
                    <p className="small-widget-data">
                        Sensación térmica: {Math.round(weather.main.feels_like)}
                        °C
                    </p>

                    <p className="temp">{Math.round(weather.main.temp)}°C</p>

                    <p
                        style={{ textTransform: "capitalize" }}
                        className="weather-descrip"
                    >
                        {weather.weather[0].description}
                    </p>

                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="icono clima"
                    />
                </aside>
            </span>
        </>
    );
}

export default Weather;
