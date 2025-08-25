import React, { useState, useMemo } from "react";

const MovieTicketBooking = () => {
  const movie = {
    title: "Avengers: Endgame",
    time: "7:30 PM",
    pricePerSeat: 12.5,
    poster:
      "https://images.unsplash.com/photo-1601933971686-3ccde6b0a6ab?auto=format&fit=crop&w=500&q=80",
  };

  const seats = useMemo(() => Array.from({ length: 30 }, (_, i) => i + 1), []);
  const [selected, setSelected] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  const toggleSeat = (n) => {
    setSelected((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]
    );
  };

  const total = selected.length * movie.pricePerSeat;

  return (
    <div className="container">
      <header>
        <h1 className="app-title">MovieMax</h1>
        <p className="app-subtitle">Book your favorite movie seats online</p>
      </header>

      <div className="content">
        {/* Movie Info + Seats */}
        <section className="movie-section">
          <div className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-time">Showtime: {movie.time}</p>
              <p className="movie-price">
                Price per Seat: ${movie.pricePerSeat.toFixed(2)}
              </p>
            </div>
          </div>

          <h3 className="section-title">Select Seats</h3>
          <div className="seats-grid">
            {seats.map((n) => (
              <button
                key={n}
                className={`seat ${selected.includes(n) ? "selected" : ""}`}
                onClick={() => toggleSeat(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </section>

        {/* Booking Summary */}
        <section className="cart-section">
          <h2 className="section-title">Booking Summary</h2>
          <div className="cart-container">
            <p>
              Selected seats:{" "}
              {selected.length === 0
                ? "—"
                : selected.sort((a, b) => a - b).join(", ")}
            </p>
            <p className="total-amount">Total: ${total.toFixed(2)}</p>

            <button
              className="checkout-btn"
              disabled={selected.length === 0}
              onClick={() => setConfirmed(true)}
            >
              Confirm Booking
            </button>

            {confirmed && (
              <p className="confirmation-msg"> Booking Confirmed!</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieTicketBooking;
