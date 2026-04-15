const pool = require("../database/mysql-pool");

const allNews = async (req, res) => {
    try {
        const [newsdata] = await pool.query(
            "SELECT * FROM news ORDER BY fecha DESC",
        );
        newsdata.forEach((item) => {
            item.fecha = new Date(item.fecha)
                .toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })
                .replaceAll(" ", "-");
        });
        res.status(200).json(newsdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener noticias" });
    }
};

module.exports = { allNews };
