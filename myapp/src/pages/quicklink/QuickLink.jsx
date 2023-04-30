import React from 'react'
import styled from 'styled-components';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2 , ImMobile} from 'react-icons/im'
import {GrMail} from 'react-icons/gr'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BsFacebook , BsInstagram , BsWhatsapp , BsLinkedin } from 'react-icons/bs';

const QuickContainer=styled.div`

width:100%;
padding:1% 5%;
height:auto;
display:flex;
align-items:center;
justify-content:space-between;
color:white;
// margin-top:1rem;
background-color:#3A98B9;
//grey #EEEEEE;
// border:1px solid black;
margin-top:-0.6rem;
@media (max-width:640px){
        
display:inline-block;
  
};



.quick-body{
  display:inline-block;
  // margin-left:0.5rem;
  font-size:1rem;
  // border:1px solid blue;
  height:100%;
  width:32%;
  text-align:center;
 

  @media (max-width:640px){
        
    height:auto;
    width:100%;
    // margin-left:0.5rem;
    
  };

  .quick-contact{
    display:block;
    // border:1px solid yellow;

    .contact-icons{
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:1rem;
      text-align:left;
      width:100%;
      // margin-bottom:0.5rem;
      // border:1px solid red;

      @media (max-width:640px){
        
        height:auto;
        width:100%;
        
      };
    }
    
  };

  .quick-social{
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    align-items:center;
    // border:1px solid black;
    margin:0.3rem ;

    .icon-bt{
      margin-right:0.5rem;
      &:hover{
        // border-bottom:1px solid purple;
        color:purple;
      } 
    }
  };
};

.quick-links{
  width:32%;
  letter-spacing:2px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  // border:1px solid red;
  margin-top:1.2rem;
  margin-bottom:1.2rem;
  height:100%;
  
  @media (max-width:640px){
        
    height:auto;
    width:100%;
    text-align:center;
    
  };

  ul{
    list-style:none;
    display:inline-block;
    text-align:center;

    li{
      border-bottom:1px solid transparent;
      width:100%;
      text-align:center;
      display:inline-block;

      &:hover{
        // border-bottom:1px solid purple;
        color:purple;
      }
    }
  }
};
.quick-links-1{
  height:100%;
  width:32%;
  @media (max-width:640px){
        
    height:auto;
    width:100%;
    text-align:center;
    
  };

}



`

function QuickLink() {
  return (
    <QuickContainer>
      <div className='quick-links-1'>We Offer, An Unparalleled Spectrum Of Preventive And Diagnostic Treatment Options Across Specialties Such As Kidney Transplant, Liver Transplant, Oncology etc. and Has Catered To More Than 1mn Patients.  </div>
      <div className='quick-links'>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Book Appointment</li>
          <li>About</li>
        </ul>
      </div>
      <div className='quick-body'>
          <div className='quick-contact'>
          <div className='contact-icons'><BsFillTelephoneFill className='icon-bb'/><p>+91 1234 2343</p></div>
          <div className='contact-icons'><ImMobile className='icon-bb'/><p>+91 1234 2343</p></div>
          <div className='contact-icons'><GrMail className='icon-bb'/><p>test@gmail.com</p></div>
          <div className='contact-icons'><ImLocation2 className='icon-bb'/><p>Moraina Gwalior Madhya Pradesh</p></div>
        </div>
        <div className='quick-social'>
          <BsFacebook className='icon-bt'/><BsWhatsapp className='icon-bt'/><BsInstagram className='icon-bt'/><BsLinkedin className='icon-bt'/>
        </div>
        </div>
    </QuickContainer>
  )
}

export default QuickLink