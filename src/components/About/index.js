import { useEffect, useState, useRef } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Slider = () => {
  const sliderRef = useRef(null);
  const [About, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "About");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });

    const slider = sliderRef.current;

    const slideInterval = setInterval(() => {
      if (slider) {
        const scrollPosition =
          slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth
            ? 0
            : slider.scrollLeft + slider.offsetWidth;
        slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="container">
      <section id="experience">
        <div className="about">
          <div className="about_main">
            <div className="about_text">
              <h1>
                <span>{About.title}</span>
                {About.subtitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="slider-wrapper">
        <div ref={sliderRef} className="slider">
          <div className="slide">
            <img src="./images/about1.jpg" alt="Image 1" />
            <div className="slide-text">{About.text1}</div>
          </div>
          <div className="slide">
            <img src="./images/about2.jpg" alt="Image 2" />
            <div className="slide-text">{About.text2}</div>
          </div>
          <div className="slide">
            <img src="./images/about3.jpg" alt="Image 3" />
            <div className="slide-text">{About.text3}</div>
          </div>
        </div>

        <div className="slider-nav">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>

      <div className="team">
        <h1>
          Our<span> Team</span>
        </h1>
        <div className="team_box">
          <div className="profile">
            <img src="./images/ando.jpg" alt="ando-pic" className="about-pic" />
            <div className="info">
              <h2 className="name">Revando Aruperes</h2>
            </div>
          </div>
          <div className="profile">
            <img
              src="./images/ricky.jpg"
              alt="ricky-pic"
              className="about-pic"
            />
            <div className="info">
              <h2 className="name">Ricky Mambu</h2>
            </div>
          </div>
          <div className="profile">
            <img
              src="./images/jeremy.png"
              alt="jeremy-pic"
              className="about-pic"
            />
            <div className="info">
              <h2 className="name">Jeremy Purukan</h2>
            </div>
          </div>
          <div className="profile">
            <img
              src="./images/mili.jpg"
              alt="emily-pic"
              className="about-pic"
            />
            <div className="info">
              <h2 className="name">Emily Pangemanan</h2>
            </div>
          </div>
          <div className="profile">
            <img src="./images/lika.jpg" alt="lika-pic" className="about-pic" />
            <div className="info">
              <h2 className="name">Noselycha Soriton</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
