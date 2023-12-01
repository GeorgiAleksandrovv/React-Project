import { Link } from "react-router-dom";

export default function TrainerListItem({
  _id,
  name,
  Phone,
  ImageUrl,
  height,
  message,
  weight,
}) {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mx-auto">
        <div className="box">
          <div className="name">
            <h5>{name}</h5>
          </div>
          <div className="img-box">
            <img src={ImageUrl} alt="" />
          </div>
          <div className="text">
            <div className="d-flex ">
              <Link to={`/trainers/${_id}`} className="details-button">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
