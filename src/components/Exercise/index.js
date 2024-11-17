import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
import bodybuildingImage from "../../assets/img/body.jpg";
import kickboxingImage from "../../assets/img/kick.jpg";
import cardioImage from "../../assets/img/run.jpg";
import boxingImage from "../../assets/img/boxing.jpg";

const Exercise = () => {
  const [exercises, setExercises] = useState({});
  const [selectedExercise, setSelectedExercise] = useState({});
  const [selectedImage, setSelectedImage] = useState("");

  const exerciseImages = {
    "Body Building": bodybuildingImage,
    "Kick Boxing": kickboxingImage,
    "Cardio Workout": cardioImage,
    Boxing: boxingImage,
  };

  useEffect(() => {
    const db = getDatabase();
    const exercisesRef = ref(db, "Exercise");

    onValue(exercisesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setExercises(data);

        const defaultExerciseKey = Object.keys(data)[0];
        const defaultExercise = data[defaultExerciseKey];
        setSelectedExercise(defaultExercise);
        setSelectedImage(exerciseImages[defaultExercise.name]);
      }
    });
  }, []);

  const handleThumbnailClick = (exercise) => {
    setSelectedExercise(exercise);
    setSelectedImage(exerciseImages[exercise.name]);
  };

  return (
    <div className="exercise-section">
      <h2 className="section-heading">{exercises.title}</h2>
      <p className="section-subtext">{exercises.subtitle}</p>
      <button className="schedule-button">{exercises.view}</button>

      <div className="exercise-content">
        <img
          src={selectedImage}
          alt={selectedExercise.name}
          className="main-exercise-image"
        />
        <div className="exercise-description">
          <h3>{selectedExercise.name}</h3>
          <p>{selectedExercise.desc}</p>
          <a href="#" className="view-schedule-link">
            View Schedule ➔
          </a>
        </div>
      </div>

      <div className="exercise-list">
        {Object.entries(exercises).map(([key, exercise]) => (
          <div
            key={key}
            className="exercise-item"
            onClick={() => handleThumbnailClick(exercise)}
          >
            <img src={exerciseImages[exercise.name]} alt={exercise.name} />
            <p>{exercise.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
