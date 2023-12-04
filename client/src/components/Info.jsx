import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Info() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const handleSendClick = () => {
    setIsClicked(true);
    navigate("/contactUs");
  };

  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="info_items">
          <a href="">
            <div className="item ">
              <div onClick={handleSendClick} className="img-box box-1">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>Sofia</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item ">
              <div onClick={handleSendClick} className="img-box box-2">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>+359 897777777</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item ">
              <div onClick={handleSendClick} className="img-box box-3">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>NeoGym@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
