import React, { useState } from "react";
import "./styles2.css";
import Header from "./Header";
import Week from "./Week";
import WeekDay from "./WeekDay";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar">
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      <Week currentDate={currentDate}/>
      <WeekDay currentDate={currentDate} setCurrentDate={setCurrentDate}  selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default Calender;
