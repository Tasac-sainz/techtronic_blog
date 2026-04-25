const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = async (arg1, arg2) => {
    let url;
    // CASO 1: Coordinadas obtenidas de geolocation
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        const lat = arg1;
        const lon = arg2;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
    }
    // CASO 2: Ciudad ingresada por el usuario
    else if (typeof arg1 === "string") {
        const city = arg1;
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
    } else {
        throw new Error("Argumentos inválidos para obtener el clima");
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al obtener el clima");
    }
    return await res.json();
};

export default getWeather;
