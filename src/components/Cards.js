import React from "react";
import Describe from "./Describe";
import Button from "react-bootstrap/Button";
import './Cards.css'

import AquariumPage from "../media/Acuarium_Trim.mp4";
import cedevPage from "../media/cedev_Trim.mp4";
import DviajePage from "../media/DviajePage.png";
import florbyfranPage from "../media/fbf_Trim.mp4";
import { Container } from "react-bootstrap";

const cards = [
  {
    id: 1,
    image: AquariumPage,
    name: "Acuarium",
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
    image: cedevPage,
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
    image: florbyfranPage,
    name: "Flor By Fran",
    autor: ["CE{dev}"],
    description:
      "Hecho para un nuevo emprendimiento con marca registrada de venta de ropa y accesorios",
    technologies: ["HTLM", "CSS", "BOOTSTRAP", "JS", "FLEX-BOX", ""],
    url: "https://github.com/emicasso/Aquarium-Posadas",
  },
  {
    id: 4,
    image: DviajePage,
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
        <div className="row align-items-center justify-content-center text-center pt-5">
          <h1>PROJECT</h1>
          <span>This is a summary of my personal projects.</span>
          <p>Hope you like them and we can work together <span>&#129309;</span>.</p>
        </div>
        <div className="row align-items-center justify-content-center py-3">
          {cards.map((card) => (
            <div className="col-sm my-2" key={card.id}>
              <Describe
                name={card.name}
                imageSrc={card.image}
                Autor={card.autor}
                Description={card.description}
                Technologies={card.technologies}
                Url={card.url}
              />
            </div>
          ))}
        </div>
        <div className="row text-center">
          <Container>
            <Button variant="outline-dark" size="lg">
              View all Project
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Cards;
