import React from "react";
import { Calendar } from "../react";

const DayComponent = ({ date }: { date: Date }) => (
  <div style={{ height: '34px', width: '36px' }}>
    {date.getDate()}
  </div>
);

const BasicCalendar = () => {
  return (
    <Calendar
      date={new Date()}
      dayComponent={DayComponent}
    />
  );
};

export default BasicCalendar;