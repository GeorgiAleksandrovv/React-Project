import { useNavigate, useParams } from "react-router-dom";

import * as trainerService from "../services/trainerService";

import { useEffect, useState } from "react";

export default function TrainerUpdate() {
  const navigate = useNavigate();
  const { trainerId } = useParams();
  const [trainer, setTrainer] = useState({
    name: "",
    Phone: "",
    ImageUrl: "",
    height: "",
    message: "",
    weight: "",
  });

  useEffect(() => {
    trainerService.getOne(trainerId).then((result) => {
      setTrainer(result);
    });
  }, [trainerId]);

  const editTrainerSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await trainerService.edit(trainerId, values);

      navigate("/trainers");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setTrainer((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="contact_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="images/t2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
              <div className="heading_container">
                <h2>Edit Trainer</h2>
              </div>
              <form id="edit" onSubmit={editTrainerSubmitHandler}>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={trainer.name}
                    onChange={onChange}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={trainer.height}
                    onChange={onChange}
                    placeholder="Height"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={trainer.weight}
                    onChange={onChange}
                    placeholder="Weight"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    value={trainer.Phone}
                    onChange={onChange}
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="ImageUrl"
                    name="ImageUrl"
                    value={trainer.ImageUrl}
                    onChange={onChange}
                    placeholder="Insert image"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={trainer.message}
                    onChange={onChange}
                    className="message-box"
                    placeholder="Motivation Speak"
                  />
                </div>
                <div className="d-flex ">
                  <button
                    className="btn submit"
                    type="submit"
                    value="editTrainer"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
