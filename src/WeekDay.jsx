import React from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  toDate,
  isBefore,
} from "date-fns";

const WeekDay = ({ currentDate, selectedDate, setSelectedDate }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = "d";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  let availableDays = [
    {
      time: "2021-10-31",
    },
    { time: "2021-11-23" },
  ];

  console.log(day);

  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;

      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : ""
          } ${isBefore(day, new Date()) ? "disabled" : ""}`}
          key={day}
          onClick={() => onDateClick(toDate(cloneDay))}
        >
          <span className="number">{formattedDate}</span>
          {/* <span className="bg">{formattedDate}</span> */}
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};
export default WeekDay;
