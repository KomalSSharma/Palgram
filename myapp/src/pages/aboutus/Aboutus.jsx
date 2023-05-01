import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import hosi from '../../assets/hosi.jpg'
import {FaAngleDoubleRight, FaUserMd} from 'react-icons/fa'
import {BiBuildingHouse} from 'react-icons/bi'
import {MdCleanHands} from 'react-icons/md'
import {TbStethoscope} from 'react-icons/tb';
import PageHeader from '../pageHeader/PageHeader'
import QuickLink from '../quicklink/QuickLink'
import AccessRoutes from '../accent/AccessRoutes'

const AboutConatiner=styled.div`
width:100%;
margin-top:4rem;
padding:0 2.5%;
.about-img{
width:100%;

height:20rem;
.img{
  width:100%;
  height:100%;

}
};

.about-title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:1rem;
  .icon{
    margin-top:0.2rem;
    float:right;
    margin-left:0.2rem;
    color:goldenrod;
  };
  h1{
    font-size:1.4rem;
    font-weight:bold;
  }
};

.about-content{
  width:100%;
  text-align:justify;
};


.about-body{
  width:100%;
  display:flex;
  // border-radius:4px;
  min-height:10rem;
  align-items:center;
  justify-content:center;


  // @media (max-width:380px){
  //   display:inline-block
  //   width:100%;
  //   text-align:center;
    
  // };

  .about-body-card{
    width:18%;
    height:8rem;
    margin-left:0.3rem;
    cursor:pointer;
    // border:1px solid grey;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    // padding:3rem 6rem;
    background-color:#EEEEEE;
    border-radius:7px;
    align-items:center;
    justify-content:center;
    // @media (max-width:380px){
    //   display:inline-block
    //   width:100%;
    //   text-align:center;
      
    // };
  
   

    h2{
      font-size:1.3rem;
      text-align:center;

      @media (max-width:1089px){
      font-size:0.7rem;
      }
    };
    .about-card-icon{
      width:2rem;
      height:3rem;
    }
    

  }
}

`

function Aboutus() {
  const param=useParams()
  return (
    <>
    <PageHeader
    title='About us'
    img={hosi}/>
    <AboutConatiner>
      {/* <div className='about-img'>
        <img className='img' src={hosi}/>
      </div>
      <div className='about-title'>
        <h1>About us <FaAngleDoubleRight className='icon'/></h1>
      </div> */}
      <div className='about-content'>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='about-body'>
        <div className='about-body-card'>
          <BiBuildingHouse className='about-card-icon'/>
          <h2>Hospital Network</h2>
        </div>
        <div className='about-body-card'>
          <MdCleanHands className='about-card-icon'/>
          <h2>Patient treated</h2>
        </div>
        <div className='about-body-card'>
          <FaUserMd className='about-card-icon'/>
          <h2>Our Doctors</h2>
        </div>
        <div className='about-body-card'>
          <TbStethoscope className='about-card-icon'/>
          <h2>Facility</h2>
        </div>
      </div>
        
    </AboutConatiner>
    <AccessRoutes/>
    {/* <QuickLink/> */}
    </>
  )
}

export default Aboutus