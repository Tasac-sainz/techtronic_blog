import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProjects } from "../services/api";
import Form from "../components/Form";
import Header from "../components/Header";
import ProjectPreview from "../components/ProjectPreview";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../index.css";

const HomePage = () => {
    const initialForm = {
        nameProj: "",
        slogan: "",
        repo: "",
        demo: "",
        techs: "",
        description: "",
        owner: "",
        jobTitle: "",
    };
    const [formData, setFormData] = useState(initialForm);

    const navigate = useNavigate();

    const resetFormData = () => setFormData(initialForm);

    const updateFormData = (key, value) => {
        setFormData((currentState) => ({
            ...currentState,
            [key]: value,
        }));
    };
    const createProjects = () => {
        addProjects(formData).then((data) => {
            setFormData(data);
            navigate("/project-list");
        });
    };

    return (
        <>
            <Header />
            <div className="button-container">
                <Button to="/project-list" text="Ver Proyectos" />
            </div>
            <div className="data-container">
                <ProjectPreview project={formData} />
                <Form
                    formData={formData}
                    addProjects={createProjects}
                    updateFormData={updateFormData}
                    resetFormData={resetFormData}
                />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
