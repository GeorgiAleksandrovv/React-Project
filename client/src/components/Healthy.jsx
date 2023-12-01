import React, { useState } from "react";

export default function Healthy() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="heathy_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="detail-box">
              <h2>HEALTHY MIND, HEALTHY BODY</h2>
              <p>
                "Fuel your body, feed your soul! 💪 Embrace the journey of
                self-improvement at our gym. Remember, every drop of sweat is a
                step closer to your goals. Stay committed, stay consistent, and
                watch the transformation unfold. Your body deserves the best –
                give it the workout it craves. Today's effort is tomorrow's
                result. Let's crush those fitness goals together! 🏋️‍♂️
              </p>
              {showMore && (
                <p>
                  Where dedication meets inspiration. Every drop of sweat is a
                  testament to your commitment, a step closer to conquering your
                  goals. Stay committed, stay consistent, and witness the
                  incredible transformation unfold within you. Your body
                  deserves the best nourish it with the invigorating workout it
                  craves. Today's effort is not just a workout; it's an
                  investment in the vitality of tomorrow. The grind today
                  becomes the triumph of tomorrow. Let's come together as a
                  community, supporting and motivating each other to crush those
                  fitness goals and celebrate every achievement. In this shared
                  pursuit of health and strength, we build not only our bodies
                  but also lifelong friendships and a resilient spirit. Join us
                  on this exhilarating journey towards a healthier, happier you!
                  🏋️‍♂️ #FitLife #GymMotivation #HealthyHabits #TransformYourself"
                </p>
              )}
              <div className="btn-box">
                <a href="#" onClick={toggleShowMore}>
                  {showMore ? "READ LESS" : "READ MORE"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
