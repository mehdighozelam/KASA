import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Informations from "../components/Informations";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage"; // Import du composant ErrorPage
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import appart from "../properties.json";


export default function Logement() {
  function prepareLogementDataForCollapse(logement) {
    return [
      {
        title: "Description",
        text: logement.description,
      },
      {
        title: "Équipements",
        text: (
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        ),
      },
    ];
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const logement = appart.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true }); // Redirection vers la page d'erreur si l'ID est invalide
    }
  }, [logement]);

  if (!logement) {
    return <ErrorPage />; // Afficher la page d'erreur si le logement est introuvable
  }

  const collapseData = prepareLogementDataForCollapse(logement);

  return (
    <>
        <Header />
        <Slider pictures={logement.pictures} />
        <Informations logement={logement} />
        <Collapse data={collapseData}/>
        <Footer />
    </>
);
}