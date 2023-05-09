import React, { useState, useEffect } from 'react';
import DateBar from './DateBar';
import styled from 'styled-components';
import TimeAmerican from './TimeAmerican';

const TimeContainer=styled.div`
width:100%;
height:100%;
padding:5% 1%;

.top-bar{
display: flex;
align-items: center;
justify-content: space-between;
};

.time-zone-select{
  width:100%;
  height:2rem;
  // border:1px solid aqua;
  text-align:center;
  margin-bottom:1rem;

  .select-zone{
    width:100%;
    height:100%;
    border-radius:6px;
  };
};

.time-slots-div{
  // border:1px solid green;
}

.day-time-slots{
  display:flex;
  align-items:center;
  justify-content:space-between;
  border:1px solid #D6E8DB;
  height:5rem;
  margin-bott:0.2rem;

  .side-time{
    display:flex;
    align-items:center;
    justify-content:space-between;
  };
};
.time-show{
  margin-left:0.1rem;
  margin-right:0.3rem;
};

.format-date{
  background-color:#F6F1E9;
  height:100%;
  text-align:center;
  display:flex;
  align-items:center;
  min-width:12rem;
  

};

date-three{
  // height:100%;
  font-size:0.8rem;
}
`

const TimeSlotComponent = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [weekOffset, setWeekOffset] = useState(0);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }));
  }, []);

  useEffect(() => {
    const slots = [];
    for (let i = 8; i <= 18; i++) {
      for (let j = 0; j < 60; j += 30) {
        const hour = i % 12 === 0 ? 12 : i % 12;
        const amPm = i < 12 ? 'AM' : 'PM';
        slots.push({ time: `${hour}:${j < 10 ? '0' + j : j} ${amPm}`, selected: false });
      }
    }
    setTimeSlots(slots);
  }, []);
// /////////////////////////////////////////




  const handleTimeZoneChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const handleTimeSlotToggle = (day, time) => {
    const updatedSlots = timeSlots.map((slot) => {
      if (slot.time === time) {
        return { ...slot, selected: !slot.selected };
      }
      return slot;
    });
    setTimeSlots(updatedSlots);
  };



  

  const getTimeWithTimeZone = (time) => {
    const currentTime = new Date();
    const timeZoneOffset = currentTime.getTimezoneOffset() * 60 * 1000;
    const timeZoneTime = new Date(currentTime.getTime() + timeZoneOffset);
  
    if (selectedTimeZone === 'UTC') {
      return time;
    } else {
     
      const options = { timeZone: selectedTimeZone, hour12: true, hour: 'numeric', minute: 'numeric' };
      const formattedTime = timeZoneTime.toLocaleTimeString('en-US', options);
      return formattedTime;
    }
  };
  
  
  const isPastDay = (dayIndex) => {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(targetDate.getDate() + weekOffset + dayIndex);
  
    const currentTime = today.getHours() * 60 + today.getMinutes();
    const targetTime = targetDate.getHours() * 60 + targetDate.getMinutes();
  
    if (targetDate < today) {
      return true;
    } else if (targetDate.getDate() === today.getDate()) {
      return currentTime >= 18 * 60;
    } else {
      return false; 
    }
  };
  
 
  
  const handlePreviousWeek = () => {
    setWeekOffset((prevOffset) => prevOffset - 7);
  };

  const handleNextWeek = () => {
    setWeekOffset((prevOffset) => prevOffset + 7);
  };

  const getWeeklyDate = (index) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + weekOffset + index);
    return currentDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <TimeContainer>
      <div className="top-bar">
        <button onClick={handlePreviousWeek}>Previous Week</button>
        <DateBar
          currentDate={currentDate}
          weekOffset={weekOffset}
          handlePreviousWeek={handlePreviousWeek}
          handleNextWeek={handleNextWeek}
        />
        <button onClick={handleNextWeek}>Next Week</button>
      </div>
      <div className="time-zone-select">
        <select value={selectedTimeZone} onChange={handleTimeZoneChange} className='select-zone'>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
        </select>
      </div>
      <div className="time-slots-div">
  {[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => {
    const formattedDate = getWeeklyDate(index);
    const isPast = isPastDay(index);

    return (
      <div key={day} className="day-time-slots">
        <div className='format-date'>
        <h3 className='date-three'>{formattedDate}</h3>
        </div>
        <div className='side-time'>
          
        {isPast ? (
          <div className="past-day-slot">Past</div>
        ) : (
          timeSlots.map((slot) => (
            <div key={slot.time} className="time-slot">
              <label>
                <input
                  type="checkbox"
                  checked={slot.selected}
                  onChange={() => handleTimeSlotToggle(index, slot.time)}
                />
                <span className='time-show'>{getTimeWithTimeZone(slot.time)}</span>
              </label>
            </div>
          ))
        )}
        </div>
        
      </div>
    );
  })}
</div>

</TimeContainer>
)
}
export default TimeSlotComponent
