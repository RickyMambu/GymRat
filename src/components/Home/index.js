import React, {useEffect, useState} from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import GymPhoto from "../../assets/img/strong-man-training-gym.jpg";
import GymPhoto2 from "../../assets/img/people-doing-indoor-cycling.jpg";
import GymPhoto3 from "../../assets/img/close-up-kettlebells-workout-gym.jpg";

const Home = () => {
  const [Dhome, setHome] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const HomeRef = ref(db, "Home");
    onValue(HomeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return ( 
    <div>
      <MouseTrail strokeColor="rgb(240, 219, 79)" lineWidthStart={10} />
      <section className="home-section" id="Home">
        <div className="home-content">
          <h1 className="home-title">{Dhome.Title}</h1>
          <p className="home-paragraph">
            {Dhome.Sub}
          </p>
          <div className="image-container">
            <img src={GymPhoto2} alt="gym" className="gym-image side-image" />
            <img src={GymPhoto} alt="gym" className="gym-image center-image" />
            <img src={GymPhoto3} alt="gym" className="gym-image side-image" />
          </div>
        </div>
        <div className="homeLow">
        </div>
      </section>
    </div>
  );
};

export default Home;
