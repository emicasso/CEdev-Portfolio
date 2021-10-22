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
import brithdayPage from "../../../media/brithdayPage.png";
import brithdaySlide from "../../../media/brithdaySlide.png";
import CotizadorPage from "../../../media/CotizadorPage.png";
import CotizadorSlide from "../../../media/CotizadorSlide.png";

const project = [
  {
    id: 1,
    name: 'Acuarium Posadas',
    imgP: Acuarium,
    imgS: AcuariumSlide,
    create: 2020,
    autor: ["CE{dev}"],
    description:"Ecommerce dedicated to the sale of ornamental fish, care materials, fish tanks personzalidas. Created and designed for Acuarium-Posadas Argentina client. (Also presented as a final project in the Faculty where I study)",
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
      "Creation of my Portfolio in ReactJs in which I personally design based on my tastes and knowledge. My Personal Projects and My Data are located",    technologies: [
      "REACT JS",
      "JS",
      "BOOTSTRAP",
      "REACT HOOK",
      "CSS",
      "REACT ROUTER",
    ],
    url: "https://github.com/emicasso/CE-dev-",
  },
  {
    id: 3,
    imgP: florbyfranPage,
    imgS: florbyfranSlide,
    create: 2019,
    name: "Flor By Fran",
    autor: ["CE{dev}"],
    description:
      "Made for a new venture selling clothes and accessories, it was also one of my first front-end projects.",
    technologies: ["HTLM", "CSS", "BOOTSTRAP", "JS", "FLEX-BOX", ""],
    url: "https://florbyfran.netlify.app/",
  },
  {
    id: 4,
    imgP: DviajePage,
    imgS: DviajeSlide,
    create: 2021,
    name: "Dviaje",
    autor: ["CE{dev}"],
    description: "Website made in ReactJS. As a tutotial taken from Youtube but with many personal modifications of their own to expand knowledge",
    technologies: ["REACT JS", "REACK HOOKS", "BOOTSTRAP", "CSS", "HTML"],
    url: "https://dviaje.netlify.app/",
  },
  {
    id: 5,
    imgP: brithdayPage,
    imgS: brithdaySlide,
    create: 2021,
    name: "Brithday",
    autor: ["CE{dev}"],
    description: "User upload app to schedule birthdays. Entry and Creations of users so that each one has a unique database with its own agenda",
    technologies: ["REACT NATIVE", "REACK HOOKS", "ANDROID STUDIO", "FIREBASE", "HTML"],
    url: "https://github.com/emicasso/Brithday",
  },
  {
    id: 6,
    imgP: CotizadorPage,
    imgS: CotizadorSlide,
    create: 2021,
    name: "Cotizador Prestamos",
    autor: ["CE{dev}"],
    description: "Loan quote, where the user can enter the amount he wants to request in the loan, the interest and the terms in which he will pay.",
    technologies: ["REACT NATIVE", "REACK HOOKS", "ANDROID STUDIO", "CSS", "HTML"],
    url: "https://github.com/emicasso/CotizadordePrestamos",
  }
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
