import React from "react";
import {
  addMonths,
  subMonths,
  format,
  isBefore,
  startOfWeek,
  startOfMonth,
} from "date-fns";
import { sv } from "date-fns/locale";

const Header = ({ currentDate, setCurrentDate }) => {
  const monthStart = startOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const dateFormat = "MMMM yyyy";

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className="header row flex-middle">
      <div className="column col-start">
        {!isBefore(startDate, new Date()) ? (
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="column col-center">
        <span>{format(currentDate, dateFormat, { locale: sv })} </span>
      </div>

      <div className="column col-end">
        <div className="icon" onClick={nextMonth}>
          chevron_right
        </div>
      </div>
    </div>
  );
};

export default Header;
