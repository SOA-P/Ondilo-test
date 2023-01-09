import React from "react";

function Meeting() {
  return (
    <div>
      <h1>Meeting</h1>
      <div className="container">
        <div className="day-container">
          <h4>Mon</h4>
          <h5>3</h5>

          <div className="time-container">
            <ul>
              <li>9:00 AM</li>
              <li>2:00 PM</li>
              <li>4:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="day-container-2">
          <h4>Tue</h4>
          <h5>4</h5>

          <div className="time-container-2">
            <ul>
              <li>10:30 AM</li>
              <li>1:00 PM</li>
              <li>---</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="day-container-3">
          <h4>Wed</h4>
          <h5>5</h5>

          <div className="time-container-3">
            <ul>
              <li>9:00 AM</li>
              <li>3:00 PM</li>
              <li>6:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-4">
        <div className="day-container-4">
          <h4>Thu</h4>
          <h5>6</h5>

          <div className="time-container-4">
            <ul>
              <li>11:00 AM</li>
              <li>---</li>
              <li>3:50 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-5">
        <div className="day-container-5">
          <h4>Fri</h4>
          <h5>7</h5>

          <div className="time-container-5">
            <ul>
              <li>9:20 AM</li>
              <li>1:15 PM</li>
              <li>5:45 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
