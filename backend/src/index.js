require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { getLatestNews } = require("../src/controllers/newsController");
const { allNews } = require("../src/controllers/allNewsController");
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración para subir límite de respuesta
app.use(express.json({ limit: "25mb" }));
// Para evitar errores de diferente origen cuando se hace la petición
app.use(cors());

// Endpoints

// ENDPOINT PARA COGER LOS PROYECTOS (en este ejemplo, cambiar por los endpoints que correspondan)
app.get("/api/news/latest", getLatestNews);
app.get("/api/news", allNews);

// Ruta a los archivos estáticos del build
const publicPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(publicPath));
// Cualquier ruta del frontend → index.html
app.get("/*splat", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
// Configuración para escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
