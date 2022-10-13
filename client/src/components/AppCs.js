import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function AppCs() {
  const [date, setDate] = useState(new Date());

  return (
    <main style={{ marginTop: "58px" }}>
      <div className="container pt-4">
        <h1 className="header">Calendar</h1>
        <div className="calendar-container w-100">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div>Selected date: {date.toDateString()}</div>
      </div>
    </main>
  );
}

export default AppCs;
