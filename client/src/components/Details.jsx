import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as trainerService from "../services/trainerService";
import AuthContext from "../contexts/authContext";
import useForm from "../hooks/useForm";

export default function Details() {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [trainer, setTrainer] = useState({});
  const { trainerId } = useParams();

  useEffect(() => {
    trainerService.getOne(trainerId).then(setTrainer);
  }, [trainerId]);

  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mx-auto">
        <div className="box">
          <div className="name">
            <h5>{trainer.name}</h5>
          </div>
          <div className="number">
            <h5>{trainer.height}</h5>
          </div>
          <div className="number">
            <h5>{trainer.weight}</h5>
          </div>
          <div className="text">
            <h5>{trainer.message}</h5>
          </div>
          <div className="img-box">
            <img src={trainer.ImageUrl} alt="" />
          </div>
          <div className="number">
            <h5>{trainer.Phone}</h5>
          </div>
          <div className="text">
            <div className="d-flex "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
