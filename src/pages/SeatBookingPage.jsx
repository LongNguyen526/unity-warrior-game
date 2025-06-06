import React, { useState } from 'react';
import './SeatBookingPage.css';

const rows = ['A', 'B', 'C', 'D', 'E'];
const seatsPerRow = 8;

function SeatBookingPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const confirmBooking = () => {
    alert(`Bạn đã đặt ghế: ${selectedSeats.join(', ')}`);
    setSelectedSeats([]);
  };

  return (
    <div className="seat-booking-page">
      <h2>Chọn Ghế</h2>
      <div className="screen">MÀN HÌNH</div>
      <div className="seat-grid">
        {rows.map((row) =>
          Array.from({ length: seatsPerRow }, (_, i) => {
            const seat = `${row}${i + 1}`;
            return (
              <div
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </div>
            );
          })
        )}
      </div>
      <button className="confirm-btn" onClick={confirmBooking}>Xác Nhận</button>
    </div>
  );
}

export default SeatBookingPage;
