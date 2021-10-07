import React from "react";
import MyProject from "./MyProject";

import Acuarium from "../../../media/AquariumPage.png";
import AcuariumSlide from "../../../media/AquariumSlide.png";
import cedevPage from "../../../media/cedevPage.png";
import cedevSlide from "../../../media/cedevSlide.png";
import DviajePage from "../../../media/DviajePage.png";
import DviajeSlide from "../../../media/DviajeSlide.png";
import florbyfranPage from "../../../media/florbyfranPage.png";
import florbyfranSlide from "../../../media/florbyfranSlide.png";
// import brithdayPage from "../../../media/brithdayPage.png";
// import brithdaySlide from "../../../media/brithdaySlide.png";

const project = [
  {
    id: 1,
    name: 'Acuarium Posadas',
    imgP: Acuarium,
    imgS: AcuariumSlide,
    create: 2020,
    autor: ["CE{dev}"],
    description:
      "Ecommerce dedicado a la venta de peces ornamentales, materiales de cuidado, peceras personzalidas, etc...",
    technologies: [
      "PHP",
      "CODEIGNITER",
      "PHPMyAdmin",
      "BOOTSTRAP",
      "JS",
      "HTLM",
      "CSS",
    ],
    url: "https://github.com/emicasso/Aquarium-Posadas",
  },
  {
    id: 2,
    imgP: cedevPage,
    imgS: cedevSlide,
    create: 2021,
    name: "CE{Dev}",
    autor: ["CE{dev}"],
    description:
      "Created by me this is my Web Portfolio in React JS based on various projects",
    technologies: [
      "REACT JS",
      "JS",
      "BOOTSTRAP",
      "REACT HOOK",
      "CSS",
      "REACT ROUTER",
    ],
    url: "https://github.com/emicasso/Aquarium-Posadas",
  },
  {
    id: 3,
    imgP: florbyfranPage,
    imgS: florbyfranSlide,
    create: 2019,
    name: "Flor By Fran",
    autor: ["CE{dev}"],
    description:
      "Hecho para un nuevo emprendimiento con marca registrada de venta de ropa y accesorios",
    technologies: ["HTLM", "CSS", "BOOTSTRAP", "JS", "FLEX-BOX", ""],
    url: "https://github.com/emicasso/Aquarium-Posadas",
  },
  {
    id: 4,
    imgP: DviajePage,
    imgS: DviajeSlide,
    create: 2021,
    name: "Dviaje",
    autor: ["CE{dev}"],
    description: "ReactJS Web for traveling enterprise.",
    technologies: ["REACT JS", "REACK HOOKS", "BOOTSTRAP", "CSS", "HTML"],
    url: "https://github.com/emicasso/Aquarium-Posadas",
  },
];

function Cards() {
  return (
    <div className="container-fluid cards__container align-items-center py-5">
      <div className="container">
        <div className="row row align-items-center justify-content-center py-3"></div>
        {project.map((card) => (
          <MyProject
            name={card.name}
            imageP={card.imgP}
            Create={card.create}
            imageS={card.imgS}
            Autor={card.autor}
            Description={card.description}
            Technologies={card.technologies}
            Url={card.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
