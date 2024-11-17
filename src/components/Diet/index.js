import React from "react";
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

const Diet = () => {
  return (
    <section className="diet-section" id="Diet">
      <h2 className="diet-heading">WHY CHOOSE OUR DIET PLAN</h2>
      <div className="diet-features">
        <div className="diet-feature">
          <FaAppleAlt className="diet-icon" />
          <h3>Balanced Nutrition</h3>
          <p>Provides a balanced mix of essential nutrients.</p>
        </div>
        <div className="diet-feature">
          <FaLeaf className="diet-icon" />
          <h3>Natural Ingredients</h3>
          <p>Uses fresh, organic, and natural ingredients.</p>
        </div>
        <div className="diet-feature">
          <FaBacon className="diet-icon" />
          <h3>Heart Health</h3>
          <p>Designed to support cardiovascular health.</p>
        </div>
        <div className="diet-feature">
          <FaBlender className="diet-icon" />
          <h3>Personalized Plans</h3>
          <p>Customized plans to fit your lifestyle and goals.</p>
        </div>
      </div>

      <h2 className="diet-heading">Nutritional Food Categories</h2>
      <div className="food-categories">
        <a
          href="https://www.alodokter.com/ini-makanan-sumber-protein-hewani-yang-harus-anda-ketahui"
          className="food-category"
        >
          <FaFish className="food-icon" />
          <h3>Animal Protein</h3>
          <p>Protein from animal sources like fish, meat, and eggs.</p>
          <div className="food-list">
            <div className="food-item show">
              <FaFish className="food-icon" />
              <p>Fish</p>
            </div>
            <div className="food-item show">
              <FaDrumstickBite className="food-icon" />
              <p>Chicken</p>
            </div>
            <div className="food-item show">
              <FaEgg className="food-icon" />
              <p>Eggs</p>
            </div>
            <div className="food-item show">
              <FaCheese className="food-icon" />
              <p>Cheese</p>
            </div>
          </div>
        </a>

        <a
          href="https://hellosehat.com/nutrisi/fakta-gizi/11-sumber-protein-nabati-terbaik/"
          className="food-category"
        >
          <FaSeedling className="food-icon" />
          <h3>Plant Protein</h3>
          <p>Protein from plant sources like legumes and seeds.</p>
          <div className="food-list">
            <div className="food-item show">
              <FaLeaf className="food-icon" />
              <p>Spinach</p>
            </div>
            <div className="food-item show">
              <FaCarrot className="food-icon" />
              <p>Carrots</p>
            </div>
            <div className="food-item show">
              <FaSeedling className="food-icon" />
              <p>Tofu</p>
            </div>
            <div className="food-item show">
              <FaLemon className="food-icon" />
              <p>Lentils</p>
            </div>
          </div>
        </a>

        <a
          href="https://hellosehat.com/nutrisi/fakta-gizi/tips-memenuhi-mineral-dan-vitamin/"
          className="food-category"
        >
          <FaCheese className="food-icon" />
          <h3>Vitamins & Minerals</h3>
          <p>Essential vitamins and minerals for a healthy body.</p>
          <div className="food-list">
            <div className="food-item show">
              <FaAppleAlt className="food-icon" />
              <p>Apple</p>
            </div>
            <div className="food-item show">
              <FaEgg className="food-icon" />
              <p>Sweet Potatoes</p>
            </div>
            <div className="food-item show">
              <FaCarrot className="food-icon" />
              <p>Spinach</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Diet;
