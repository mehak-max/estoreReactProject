import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Section3 = () => {
  const calculateTimeRemaining = () => {
    const endDate = new Date('2024-09-30T00:00:00'); // Set your end date here
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container-fluid mt-3 " style={{backgroundColor: '#b8bfc3'}}>
      <div className="row">
        <div className="col-12 col-md-6 col-sm-6 text-center justify-content-center py-5" style={{backgroundColor: '#b8bfc3'}}>
          <h2 className="mt-2">Best Offer-Upto 13%</h2>
          <p>Explore our Google Pixel 6A and Unlock Discount</p>
          {/* Countdown Timer */}
          <div id="countdown" className="d-flex justify-content-center mt-4 ">
            <div className="timer-section mx-3 bg-light px-3 py-1">
              <span className="timer-value">{timeRemaining.days.toString().padStart(2, '0')}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-section mx-3 bg-light px-3 py-1">
              <span className="timer-value">{timeRemaining.hours.toString().padStart(2, '0')}</span>
              <span className="timer-label">Hrs</span>
            </div>
            <div className="timer-section mx-3 bg-light px-3 py-1">
              <span className="timer-value">{timeRemaining.minutes.toString().padStart(2, '0')}</span>
              <span className="timer-label">Mins</span>
            </div>
            <div className="timer-section mx-3 bg-light px-3 py-1">
              <span className="timer-value">{timeRemaining.seconds.toString().padStart(2, '0')}</span>
              <span className="timer-label">Secs</span>
            </div>
          </div>
          <Link to="#" className="btn btn-primary mt-4" style={{backgroundColor: '#004874'}}>Shop Now</Link>
        </div>
        <div className="col-12 col-md-6 col-sm-6">
  <img src="eimage/card5.webp" alt="offer" className="img-loop d-none d-sm-block" />
</div>
      </div>
    </div>
  );
};

export default Section3;


