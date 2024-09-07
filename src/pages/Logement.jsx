import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Informations from "../components/Informations";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
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
  const collapseData = prepareLogementDataForCollapse(logement);

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <>
      <Header />
      <Slider pictures={logement.pictures} />
      <Informations logement={logement} />
      {/* Ajout de la classe two-columns pour afficher les collapses côte à côte */}
      <Collapse data={collapseData} containerStyle={{ maxWidth: "1300px" }} className="two-columns" />
      <Footer />
    </>
  );
}