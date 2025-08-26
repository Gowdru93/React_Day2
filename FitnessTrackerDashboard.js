import React, { useState } from "react";

const FitnessTrackerDashboard = () => {
  const user = { name: "Alex", age: 28, weight: 72 };

  const [steps, setSteps] = useState(3500);
  const [calories, setCalories] = useState(220);
  const [water, setWater] = useState(5);

  const totalScore = Math.round(steps / 100 + calories + water * 10);

  return (
    <div className="container">
      <header>
        <h1 className="app-title">FitTrack</h1>
        <p className="app-subtitle">
          Welcome {user.name} • Age {user.age} • {user.weight}kg
        </p>
      </header>

      <div className="content">
        {/* Stats Section */}
        <section className="stats-section">
          <h2 className="section-title">Today’s Stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Steps</p>
              <h3 className="stat-value">{steps}</h3>
              <button className="stat-btn" onClick={() => setSteps(steps + 500)}>
                +500 Steps
              </button>
            </div>

            <div className="stat-card">
              <p className="stat-label">Calories</p>
              <h3 className="stat-value">{calories} kcal</h3>
              <button className="stat-btn" onClick={() => setCalories(calories + 50)}>
                +50 kcal
              </button>
            </div>

            <div className="stat-card">
              <p className="stat-label">Water</p>
              <h3 className="stat-value">{water} glasses</h3>
              <button className="stat-btn" onClick={() => setWater(water + 1)}>
                +1 Glass
              </button>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h2 className="section-title">Daily Summary</h2>
          <div className="summary-card">
            <p className="summary-label">Health Score</p>
            <h3 className="summary-value">{totalScore}</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FitnessTrackerDashboard;
