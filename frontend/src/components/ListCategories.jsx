import { useEffect, useState } from "react";
import "../styles/categories.css";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/categories");
                const data = await res.json();

                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        getCategories();
    }, []);

    return (
        <div className="categories">
            <h2 className="title-cat">Categorías</h2>
            <ul className="list-cat">
                {categories.map((cat, index) => (
                    <li key={index}>
                        {cat.category} ({cat.total_news})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListCategories;
