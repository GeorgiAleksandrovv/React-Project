import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as trainerService from "../services/trainerService";
import AuthContext from "../contexts/authContext";
import useForm from "../hooks/useForm";
import * as likeService from "../services/likeService";

export default function Details() {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [trainer, setTrainer] = useState({});
  const { trainerId } = useParams();

  useEffect(() => {
    trainerService.getOne(trainerId).then(setTrainer);
  }, [trainerId]);

  useEffect(() => {
    likeService.getTrainerLikes(trainerId).then((likes) => {
      setTrainer((state) => ({ ...state, likes }));
    });
  }, []);

  const likeButtonClick = () => {
    if (email._id === trainer._ownerId) {
      return;
    }

    if (trainer.likes.includes(email._id)) {
      return;
    }

    likeService.like(email._id, trainerId).then(() => {
      setTrainer((state) => ({ ...state, likes: [...state.likes, email._id] }));
    });
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${trainer.name}`
    );

    if (hasConfirmed) {
      await trainerService.remove(trainerId);

      navigate("/trainers");
    }
  };

  return (
    <section className="trainer_section layout_padding">
      <div className="row" style={{textAlign: 'center'}}>
      
      
      <div className="col-lg-12 col-md-12 mx-auto">
        <div className="name">
          Name:
          <h5>{trainer.name}</h5>
        </div>
      </div>



        <div className="col-lg-5 col-md-5 mx-auto">
        </div>
        <div className="col-lg-1 col-md-1 mx-auto">
          <div className="height">
            Height:
            <h5>{trainer.height}</h5>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 mx-auto">
          <div className="weight">
            Weight:
            <h5>{trainer.weight}</h5>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 mx-auto">
        </div>

        <div className="col-lg-4 col-md-4 mx-auto">
        </div>
        <div className="col-lg-4 col-md-4 mx-auto">
        <img src={trainer.ImageUrl} style={{maxWidth: '100%'}} alt="" />

        </div>
        <div className="col-lg-2 col-md-2 mx-auto">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <h2>Biography</h2>
        <h5>{trainer.message}</h5>

        </div>
        
        <div className="col-lg-2 col-md-2 mx-auto">
        </div>
      


        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="img-box">
              <div className="number">
              <h5>Phone number: {trainer.Phone}</h5>
              </div>
            </div>
            <div className="text">
            </div>
            <div className="text">
              <div className="d-flex "></div>
            </div>
            {userId === trainer._ownerId && (
              <div className="buttons">
                <button className="button" onClick={() => {
                  window.location.href = `/trainers/${trainerId}/edit`;
                }}>
                  {" "}
                  Edit
                </button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="button" onClick={deleteButtonClickHandler}>
                  {" "} 
                  Delete
                </button>
              </div>
            )}

            {userId &&
              (userId !== trainer._ownerId ? (
                <button
                  onClick={likeButtonClick}
                  disabled={trainer.likes?.includes(userId)}
                >
                  Like
                </button>
              ) : null)}

            <div className="likes">
              <span id="total-likes" style={{fontSize: '22px', marginTop: '20px'}}>Likes: {trainer.likes?.length || 0} ♥️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
