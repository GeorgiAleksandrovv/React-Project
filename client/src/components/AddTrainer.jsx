import { useNavigate } from "react-router-dom";

import * as trainerService from "../services/trainerService";

export default function AddTrainer() {
  const navigate = useNavigate();

  const createTrainerSubmitHandler = async (e) => {
    e.preventDefault();

    const trainerData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await trainerService.create(trainerData);

      navigate("/trainers");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <section className="contact_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="images/contact-img.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
              <div className="heading_container">
                <h2>Add Trainer</h2>
              </div>
              <form id="create" onSubmit={createTrainerSubmitHandler}>
                <div>
                  <input type="text" id="name" name="name" placeholder="Name" />
                </div>
                <div>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Height"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Weight"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="ImageUrl"
                    name="ImageUrl"
                    placeholder="Insert image"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    className="message-box"
                    placeholder="Motivation Speak"
                  />
                </div>
                <div className="d-flex ">
                  <button>Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
