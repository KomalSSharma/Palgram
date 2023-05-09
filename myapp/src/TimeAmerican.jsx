import React from 'react';
import styled from 'styled-components';

const TimeAme=styled.ul`
display:flex;
align-items:center;
justify-content:space-between;
list-style:none;

.time-li{
    margin-right:0.3rem;
    margin-left:0.2rem;
    // display:inline-block;;
}
`

const TimeAmerican = () => {
   

   
      const getTimeSlots = () => {
        const timeSlots = [];
        const startTime = new Date();
        startTime.setUTCHours(13, 0, 0); // Set starting time to 8am EST (1pm UTC)
    
        const endTime = new Date();
        endTime.setUTCHours(23, 30, 0); // Set ending time to 6pm EST (11:30pm UTC)
    
        const currentTime = new Date(startTime);
    
        while (currentTime <= endTime) {
          const time = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
          timeSlots.push(time);
          currentTime.setMinutes(currentTime.getMinutes() + 30); // Increment time by 30 minutes
        }
    
        return timeSlots;
      };
    
      return (
          <TimeAme>
        
            {getTimeSlots().map((timeSlot) => 
              <li key={timeSlot} className='time-li'>{timeSlot}</li>
            )}
      
          </TimeAme>
      );
    };
    
   
    

export default TimeAmerican;
