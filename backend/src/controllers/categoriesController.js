const pool = require("../database/mysql-pool");

const getCategories = async (req, res) => {
    try {
        const [categoriesdata] = await pool.query(
            "SELECT category,COUNT(*) AS total_news FROM news GROUP BY category;",
        );
        categoriesdata.forEach((item) => {
            item.category = item.category.toLowerCase();
        });
        res.status(200).json(categoriesdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener categorías" });
    }
};

module.exports = { getCategories };
