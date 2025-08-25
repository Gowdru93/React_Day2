import React, { useState } from 'react';

const ELearningPlatform = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      author: "Jane Doe",
      duration: "6h",
      image: "https://images.unsplash.com/photo-1584697964193-f6fcfefca9bf?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      author: "John Smith",
      duration: "8h",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "UI/UX Design Basics",
      author: "Emily Johnson",
      duration: "4h",
      image: "https://images.unsplash.com/photo-1559028012-d5d7a7e2a452?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Python for Data Science",
      author: "Mike Brown",
      duration: "10h",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const [enrolled, setEnrolled] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolled.find((c) => c.id === course.id)) {
      setEnrolled([...enrolled, { ...course, progress: 0 }]);
    }
  };

  const toggleFavorite = (course) => {
    if (favorites.includes(course.id)) {
      setFavorites(favorites.filter((id) => id !== course.id));
    } else {
      setFavorites([...favorites, course.id]);
    }
  };

  const updateProgress = (id) => {
    setEnrolled(enrolled.map(c => 
      c.id === id ? { ...c, progress: Math.min(100, c.progress + 20) } : c
    ));
  };

  return (
    <div className="container">
      <header>
        <h1 className="app-title">LearnHub</h1>
        <p className="app-subtitle">Empower your skills with our online courses</p>
      </header>

      <div className="content">
        {/* Courses List */}
        <section className="menu-section">
          <h2 className="section-title">Available Courses</h2>
          <div className="course-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-author">By {course.author}</p>
                  <p className="course-duration">Duration: {course.duration}</p>
                  <div className="course-actions">
                    <button
                      className={`fav-btn ${favorites.includes(course.id) ? "active" : ""}`}
                      onClick={() => toggleFavorite(course)}
                    >
                      {favorites.includes(course.id) ? "★ Favorited" : "☆ Favorite"}
                    </button>
                    <button
                      className="enroll-btn"
                      onClick={() => enrollCourse(course)}
                    >
                      {enrolled.find(c => c.id === course.id) ? "Enrolled" : "Enroll"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enrolled Section */}
        <section className="cart-section">
          <h2 className="section-title">My Learning</h2>
          <div className="cart-container">
            {enrolled.length === 0 ? (
              <p className="empty-cart">No courses enrolled yet. Start learning today!</p>
            ) : (
              enrolled.map(course => (
                <div key={course.id} className="cart-item">
                  <div className="item-details">
                    <div className="item-name">{course.title}</div>
                    <div className="item-author">By {course.author}</div>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <button
                    className="progress-btn"
                    onClick={() => updateProgress(course.id)}
                  >
                    +20% Progress
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ELearningPlatform;
