import { useCallback, useEffect, useState } from "react";

import * as trainerService from "../services/trainerService";
import TrainerListItem from "./TrainerListItem";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = () =>
    trainerService
      .getAll(search)
      .then((result) => setTrainers(result))
      .catch((err) => {
        console.log(err);
      });

  return (
    <section className="trainer_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Gym Trainers</h2>
          <br />
        </div>
        <div className="user_option" style={{marginTop: '30px', display: 'flex', justifyContent: "center", alignItems: 'center'}}>
          <input
            type="text"
            className="search-name"
            name="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Trainer..."
          />
          <button
            className="btn  my-2 my-sm-0 nav_search-btn"
            style={{backgroundColor: '#aaaaaa'}}
            onClick={getTrainers}
          >&#128269;</button>
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
