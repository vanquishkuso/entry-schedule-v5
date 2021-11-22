import React from "react";
import {startOfWeek, format, addDays} from "date-fns"
import { sv } from "date-fns/locale";

const Week = ({currentDate}) => {
  const dateFormat = "E";
  const days = [];
  let startDate = startOfWeek(currentDate, {locale: sv});
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {format(addDays(startDate, i), dateFormat, {locale: sv})}
      </div>
    );
  }
  return <div className="days row">{days}</div>;
};

export default Week;
