const API_KEY = "850aae8ef2c42a05f5e607748f5cd55c";

const getWeather = (city) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`,
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener el clima");
            }
            return response.json();
        })
        .then((data) => data);
};

export default getWeather;
