export default function AddTrainer() {
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
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="text" placeholder="Height" />
                </div>
                <div>
                  <input type="text" placeholder="Weight" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input
                    type="text"
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
