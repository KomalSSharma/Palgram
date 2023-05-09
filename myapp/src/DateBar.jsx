import React from 'react';

const DateBar = ({ currentDate, weekOffset, handlePreviousWeek, handleNextWeek }) => {
  const getUpdatedDate = (offset) => {
    const today = new Date();
    const updatedDate = new Date(today.setDate(today.getDate() + offset));
    return updatedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div>
      {/* <button onClick={handlePreviousWeek}>Previous Week</button> */}
      <h2>{getUpdatedDate(weekOffset)}</h2>
      {/* <button onClick={handleNextWeek}>Next Week</button> */}
    </div>
  );
};

export default DateBar;
