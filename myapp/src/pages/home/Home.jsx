import React from 'react'
import { HomeContainer } from './StyleHome'
import SliderImage from './SliderImage'
import {FaPrayingHands} from 'react-icons/fa'
import one from '../../assets/one.jpg'
import Carousel from './Carousel'
import Card from './Card'
import PageHeader from '../pageHeader/PageHeader';
import hosm from '../../assets/hosm.jpg'
import Slider from '../backgroundSlider/Slider'
import AccentContainer from '../accent/AccentContainer'
import New from '../accent/New'
import QuickLink from '../quicklink/QuickLink'
import Awards from '../awards/Awards'
import HomeTwo from './HomeTwo'
import AboutStyle from '../aboutus/AboutStyle'
import Network from '../awards/Network'

function Home() {

  const data = [
    {src:one,
    href:'#',
    title:'Home Care'
  },
    {src:one,
        href:'#',
        title:'Madhumati Hospital'
      },
    {src:one,
        href:'#',
        title:'Ramay Hospital'
      }
];
  return (
    <>
     <Slider/>
    
    <HomeContainer>
    <HomeTwo/>
      <AboutStyle/>
      <Awards/>
      <Network/>
      <div className='card-container'>
      <Card/>
      </div> 
      <New/> 
    
    </HomeContainer>
    
    
    {/* <QuickLink/> */}
    
   
    {/* <AccentContainer/> */}
    </>
  )
}

export default Home