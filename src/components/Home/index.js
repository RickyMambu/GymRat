import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import ClipLoader from "react-spinners/ClipLoader";

import GymPhoto from "../../assets/img/strong-man-training-gym.jpg";
import GymPhoto2 from "../../assets/img/people-doing-indoor-cycling.jpg";
import GymPhoto3 from "../../assets/img/close-up-kettlebells-workout-gym.jpg";

const Home = () => {
  const [Home, setHome] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);

  const handleImagesLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const db = getDatabase();
    const HomeRef = ref(db, "Home");
    onValue(HomeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutReached(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imagesLoaded && timeoutReached) {
      setIsLoading(false);
    }
  }, [imagesLoaded, timeoutReached]);

  return (
    <div>
      {isLoading && (
        <div className="loader-container">
          <ClipLoader color="#36d7b7" size={30} />
        </div>
      )}
      <MouseTrail strokeColor="rgb(240, 219, 79)" lineWidthStart={10} />
      <section className="home-section" id="Home">
        <div className="home-content">

          <h1 className="home-title">{Home.title}</h1>
          <p className="home-paragraph">{Home.subtitle}</p>

          <div className="image-container">
            <img
              src={`data:image/jpg;base64, ${Home.image1}`}
              alt="gym"
              className="gym-image side-image"
              onLoad={handleImagesLoad}
            />
            <img
              src={`data:image/jpg;base64, ${Home.image2}`}
              alt="gym"
              className="gym-image center-image"
              onLoad={handleImagesLoad}
            />
            <img
              src={`data:image/jpg;base64, ${Home.image3}`}
              alt="gym"
              className="gym-image side-image"
              onLoad={handleImagesLoad}
            />
          </div>
        </div>
        <div className="homeLow"></div>
      </section>
    </div>
  );
};

export default Home;
