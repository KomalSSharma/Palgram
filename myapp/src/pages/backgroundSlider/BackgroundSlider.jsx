import React, {useState} from 'react'
import styled from 'styled-components';
import imageSlider from './dataSlider';
import clinic from '../../assets/clinic.jpg'
import spinal from '../../assets/spinal.jpg';
import homeCare from '../../assets/homeCare.jpg'



function BackgroundSlider() {

    const[currentSlide , setCurrentSlide] = useState(0);
    
    const bgImageStyle ={
    width:'100%',
    height:'100%',
    backgroundColor:'grey',
    backgroundImage: `url(${imageSlider[currentSlide].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover'
    };

    
  return (
    <div style={bgImageStyle}>
        
       </div>
  )
}

export default BackgroundSlider