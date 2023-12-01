import { useEffect, useState } from "react";

import * as trainerService from "../services/trainerService";
import TrainerListItem from "./TrainerListItem";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    trainerService
      .getAll()
      .then((result) => setTrainers(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="trainer_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Gym Trainers</h2>
        </div>
        {trainers.map((trainer) => (
          <TrainerListItem key={trainer._id} {...trainer} />
        ))}
      </div>

      {trainers.length === 0 && (
        <h3 className="no-articles">No Trainers yet</h3>
      )}
    </section>
  );
}
