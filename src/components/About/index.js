import { useEffect, useState, useRef } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ClipLoader from "react-spinners/ClipLoader";

const Slider = () => {
  const sliderRef = useRef(null);
  const [About, setAbout] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Handle loading of images
  const handleImagesLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "About");

    // Fetch data from Firebase
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });

    const slider = sliderRef.current;

    // Slider functionality
    const slideInterval = setInterval(() => {
      if (slider) {
        const scrollPosition =
          slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth
            ? 0
            : slider.scrollLeft + slider.offsetWidth;
        slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
      }
    }, 3000);

    // Set loading timeout to false after 3 seconds
    const loadingTimeout = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Combine data and image loading checks
  useEffect(() => {
    if (!isLoading && imagesLoaded) {
      // Once both data and images are loaded, hide loader
      setIsLoading(false);
    }
  }, [imagesLoaded, isLoading]);

  return (

    <div id= "About" className="container">
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


      <div className="slider-wrapper">
        {isLoading ? (
          <div className="loader-container">
            <ClipLoader color="#ffffff" size={30} />
          </div>
        ) : (
          <div ref={sliderRef} className="slider">
            <div className="slide">
              <img
                src="./images/about1.jpg"
                alt="Image 1"
                onLoad={handleImagesLoad}
              />
              <div className="slide-text">{About.text1}</div>
            </div>
            <div className="slide">
              <img
                src="./images/about2.jpg"
                alt="Image 2"
                onLoad={handleImagesLoad}
              />
              <div className="slide-text">{About.text2}</div>
            </div>
            <div className="slide">
              <img
                src="./images/about3.jpg"
                alt="Image 3"
                onLoad={handleImagesLoad}
              />
              <div className="slide-text">{About.text3}</div>
            </div>
          </div>

        )}
      </div>

      

      <div className="team">
        <h1>
          Our<span> Team</span>
        </h1>
        <div className="team_box">
          <div className="profile">
            {isLoading && (
              <div className="loader-container">
                <ClipLoader color="#ffffff" size={30} />
              </div>
            )}
            <img
              src="./images/ando.jpg"
              alt="ando-pic"
              className="about-pic"
              onLoad={handleImagesLoad}
            />
            <div className="info">
              <h2 className="name">Revando <br/>Aruperes</h2>
            </div>
          </div>
          <div className="profile">
            {isLoading && (
              <div className="loader-container">
                <ClipLoader color="#ffffff" size={30} />
              </div>
            )}
            <img
              src="./images/ricky.jpg"
              alt="ricky-pic"
              className="about-pic"
              onLoad={handleImagesLoad}
            />
            <div className="info">
              <h2 className="name">Ricky <br/> Mambu</h2>
            </div>
          </div>
          <div className="profile">
            {isLoading && (
              <div className="loader-container">
                <ClipLoader color="#ffffff" size={30} />
              </div>
            )}
            <img
              src="./images/jeremy.png"
              alt="jeremy-pic"
              className="about-pic"
              onLoad={handleImagesLoad}
            />
            <div className="info">
              <h2 className="name">Jeremy <br/>Purukan</h2>
            </div>
          </div>
          <div className="profile">
            {isLoading && (
              <div className="loader-container">
                <ClipLoader color="#ffffff" size={30} />
              </div>
            )}
            <img
              src="./images/mili.jpg"
              alt="emily-pic"
              className="about-pic"
              onLoad={handleImagesLoad}
            />
            <div className="info">
              <h2 className="name">Emily <br/>Pangemanan</h2>
            </div>
          </div>
          <div className="profile">
            {isLoading && (
              <div className="loader-container">
                <ClipLoader color="#ffffff" size={30} />
              </div>
            )}
            <img
              src="./images/lika.jpg"
              alt="lika-pic"
              className="about-pic"
              onLoad={handleImagesLoad}
            />
            <div className="info">
              <h2 className="name">Noselycha <br/>Soriton</h2>

            </div>
          </div>
        </div>
      </div>
      </section>
    </div>

  );
};

export default Slider;
