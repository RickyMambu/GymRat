import mainExerciseImage from "../../assets/img/close-up-kettlebells-workout-gym.jpg";
import bodybuildingImage from "../../assets/img/strong-man-training-gym.jpg";
import racingImage from "../../assets/img/close-up-kettlebells-workout-gym.jpg";
import yogaImage from "../../assets/img/close-up-kettlebells-workout-gym.jpg";
import kickboxingImage from "../../assets/img/close-up-kettlebells-workout-gym.jpg";
import cardioImage from "../../assets/img/close-up-kettlebells-workout-gym.jpg";
import martialArtsImage from "../../assets/img/close-up-kettlebells-workout-gym.jpg";

import React, { useState } from "react";

const Exercise = () => {
  const [selectedImage, setSelectedImage] = useState(mainExerciseImage);
  const [selectedExercise, setSelectedExercise] = useState({
    name: "Body Building",
    description: `Body Building, the original LES MILLS barbell class, will sculpt,
                  tone and strengthen your entire body, fast! Focusing on low weight
                  loads and high repetition movements, you'll burn fat, gain strength
                  and quickly produce lean body muscle conditioning.`,
  });

  const handleThumbnailClick = (image, name, description) => {
    setSelectedImage(image);
    setSelectedExercise({ name, description });
  };

  return (
    <div className="exercise-section">
      <h2 className="section-heading">Exercise</h2>
      <p className="section-subtext">
        Our fitness experts can help you discover new training techniques and
        exercises that offer a dynamic and efficient full-body workout.
      </p>
      <button className="schedule-button">View All Schedule</button>

      <div className="exercise-content">
        <img
          src={selectedImage}
          alt="Exercise"
          className="main-exercise-image"
        />
        <div className="exercise-description">
          <h3>{selectedExercise.name}</h3>
          <p>{selectedExercise.description}</p>
          <a href="#" className="view-schedule-link">
            View Schedule ➔
          </a>
        </div>
      </div>

      <div className="exercise-list">
        <div
          className="exercise-item"
          onClick={() =>
            handleThumbnailClick(
              bodybuildingImage,
              "Body Building",
              `Body Building, the original LES MILLS barbell class, will sculpt,
              tone and strengthen your entire body, fast! Focusing on low weight
              loads and high repetition movements, you'll burn fat, gain strength
              and quickly produce lean body muscle conditioning.`
            )
          }
        >
          <img src={bodybuildingImage} alt="Body Building" />
          <p>Body Building</p>
        </div>
        <div
          className="exercise-item"
          onClick={() =>
            handleThumbnailClick(
              racingImage,
              "Racing Running",
              "Racing Running offers a high-intensity cardiovascular workout designed to increase speed, endurance, and agility."
            )
          }
        >
          <img src={racingImage} alt="Racing Running" />
          <p>Racing Running</p>
        </div>
        <div
          className="exercise-item"
          onClick={() =>
            handleThumbnailClick(
              yogaImage,
              "Yoga Fitness",
              "Yoga Fitness improves flexibility, balance, and mental focus through a series of mindful exercises and postures."
            )
          }
        >
          <img src={yogaImage} alt="Yoga Fitness" />
          <p>Yoga Fitness</p>
        </div>
        <div
          className="exercise-item"
          onClick={() =>
            handleThumbnailClick(
              kickboxingImage,
              "Kick Boxing",
              "Kick Boxing provides a full-body workout that combines martial arts techniques with high-energy cardio."
            )
          }
        >
          <img src={kickboxingImage} alt="Kick Boxing" />
          <p>Kick Boxing</p>
        </div>
        <div
          className="exercise-item"
          onClick={() =>
            handleThumbnailClick(
              cardioImage,
              "Cardio Workout",
              "Cardio Workout focuses on heart-pumping exercises to improve endurance, burn calories, and boost cardiovascular health."
            )
          }
        >
          <img src={cardioImage} alt="Cardio Workout" />
          <p>Cardio Workout</p>
        </div>
        <div
          className="exercise-item"
          onClick={() =>
            handleThumbnailClick(
              martialArtsImage,
              "Martial Arts",
              "Martial Arts training enhances self-defense skills, builds strength, and improves focus and discipline."
            )
          }
        >
          <img src={martialArtsImage} alt="Martial Arts" />
          <p>Martial Arts</p>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
