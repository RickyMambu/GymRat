import React from "react";
import { FaAppleAlt, FaLeaf, FaHeartbeat, FaUtensils } from "react-icons/fa";

const Diet = () => {
  return (
    <section className="diet-section">
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
          <FaHeartbeat className="diet-icon" />
          <h3>Heart Health</h3>
          <p>Designed to support cardiovascular health.</p>
        </div>
        <div className="diet-feature">
          <FaUtensils className="diet-icon" />
          <h3>Personalized Plans</h3>
          <p>Customized plans to fit your lifestyle and goals.</p>
        </div>
      </div>
    </section>
  );
};

export default Diet;
