import React, { useState, useEffect } from "react";

const HotelReservationDashboard = () => {
  const roomsData = [
    { id: 1, type: "Deluxe Room", pricePerNight: 2000, availability: true },
    { id: 2, type: "Standard Room", pricePerNight: 1200, availability: true },
    { id: 3, type: "Suite", pricePerNight: 3500, availability: false },
  ];

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (checkInDate && checkOutDate && selectedRooms.length > 0) {
      const nights =
        (new Date(checkOutDate) - new Date(checkInDate)) /
        (1000 * 60 * 60 * 24);

      if (nights > 0) {
        const price = selectedRooms.reduce(
          (sum, room) => sum + room.pricePerNight,
          0
        );
        setTotalPrice(price * nights);
      } else {
        setTotalPrice(0);
      }
    } else {
      setTotalPrice(0);
    }
  }, [checkInDate, checkOutDate, selectedRooms]);

  const toggleRoomSelection = (room) => {
    if (selectedRooms.includes(room)) {
      setSelectedRooms(selectedRooms.filter((r) => r.id !== room.id));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  return (
    <div className="container">
      <header>
        <h1 className="app-title">HotelEase</h1>
        <p className="app-subtitle">Book your stay in a few clicks</p>
      </header>

      <div className="content">
        {/* Date Section */}
        <section className="date-section">
          <h2 className="section-title">Select Dates</h2>
          <div className="date-inputs">
            <div>
              <label>Check-In:</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
            <div>
              <label>Check-Out:</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="rooms-section">
          <h2 className="section-title">Available Rooms</h2>
          <div className="rooms-grid">
            {roomsData.map((room) => (
              <div
                key={room.id}
                className={`room-card ${
                  selectedRooms.includes(room) ? "selected" : ""
                } ${!room.availability ? "unavailable" : ""}`}
                onClick={() => room.availability && toggleRoomSelection(room)}
              >
                <h3>{room.type}</h3>
                <p>₹{room.pricePerNight} / night</p>
                <p>{room.availability ? "Available" : "Not Available"}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="summary-section">
          <h2 className="section-title">Booking Summary</h2>
          <div className="summary-card">
            <p>Check-In: {checkInDate || "—"}</p>
            <p>Check-Out: {checkOutDate || "—"}</p>
            <p>Rooms Selected: {selectedRooms.length}</p>
            <p>Total Price: ₹{totalPrice}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotelReservationDashboard;
