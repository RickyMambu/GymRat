import {
  FaFish,
  FaAppleAlt,
  FaCarrot,
  FaLemon,
  FaEgg,
  FaSeedling,
  FaDrumstickBite,
  FaCheese,
  FaLeaf,
  FaBacon,
  FaBlender,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Diet = () => {
  const [Diet, setDiet] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const DietRef = ref(db, "Diet");
    onValue(DietRef, (snapshot) => {
      const data = snapshot.val();
      setDiet(data);
    });
  }, []);
  return (
    <section className="diet-section" id="Diet">
      <h2 className="diet-heading">{Diet.title}</h2>
      <div className="diet-features">
        <div className="diet-feature">
          <FaAppleAlt className="diet-icon" />
          <h3>{Diet.subtit1}</h3>
          <p>{Diet.text1}</p>
        </div>
        <div className="diet-feature">
          <FaLeaf className="diet-icon" />
          <h3>{Diet.subtit2}</h3>
          <p>{Diet.text2}</p>
        </div>
        <div className="diet-feature">
          <FaBacon className="diet-icon" />
          <h3>{Diet.subtit3}</h3>
          <p>{Diet.text3}</p>
        </div>
        <div className="diet-feature">
          <FaBlender className="diet-icon" />
          <h3>{Diet.subtit4}</h3>
          <p>{Diet.text4}</p>
        </div>
      </div>

      <h2 className="diet-heading">{Diet.title2}</h2>
      <div className="food-categories">
        <a
          href="https://www.alodokter.com/ini-makanan-sumber-protein-hewani-yang-harus-anda-ketahui"
          className="food-category"
        >
          <FaFish className="food-icon" />
          <h3>{Diet.subtit5}</h3>
          <p>{Diet.text5}</p>
          <div className="food-list">
            <div className="food-item show">
              <FaFish className="food-icon" />
              <p>{Diet.aprotein1}</p>
            </div>
            <div className="food-item show">
              <FaDrumstickBite className="food-icon" />
              <p>{Diet.aprotein2}</p>
            </div>
            <div className="food-item show">
              <FaEgg className="food-icon" />
              <p>{Diet.aprotein3}</p>
            </div>
            <div className="food-item show">
              <FaCheese className="food-icon" />
              <p>{Diet.aprotein4}</p>
            </div>
          </div>
        </a>

        <a
          href="https://hellosehat.com/nutrisi/fakta-gizi/11-sumber-protein-nabati-terbaik/"
          className="food-category"
        >
          <FaSeedling className="food-icon" />
          <h3>{Diet.subtit6}</h3>
          <p>{Diet.text6}</p>
          <div className="food-list">
            <div className="food-item show">
              <FaLeaf className="food-icon" />
              <p>{Diet.pprotein1}</p>
            </div>
            <div className="food-item show">
              <FaCarrot className="food-icon" />
              <p>{Diet.pprotein2}</p>
            </div>
            <div className="food-item show">
              <FaSeedling className="food-icon" />
              <p>{Diet.pprotein3}</p>
            </div>
            <div className="food-item show">
              <FaLemon className="food-icon" />
              <p>{Diet.pprotein4}</p>
            </div>
          </div>
        </a>

        <a
          href="https://hellosehat.com/nutrisi/fakta-gizi/tips-memenuhi-mineral-dan-vitamin/"
          className="food-category"
        >
          <FaCheese className="food-icon" />
          <h3>{Diet.subtit7}</h3>
          <p>{Diet.text7}</p>
          <div className="food-list">
            <div className="food-item show">
              <FaAppleAlt className="food-icon" />
              <p>{Diet.vitmin1}</p>
            </div>
            <div className="food-item show">
              <FaEgg className="food-icon" />
              <p>{Diet.vitmin2}</p>
            </div>
            <div className="food-item show">
              <FaCarrot className="food-icon" />
              <p>{Diet.vitmin3}</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Diet;
