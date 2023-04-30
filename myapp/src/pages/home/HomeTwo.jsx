import React from 'react'
import styled from 'styled-components';
import img3 from '../../assets/img3.jpg'
import { Link } from 'react-router-dom';

const HomeTwoContainer=styled.div`
width:100%;
min-height:25rem;
// padding:1% 5%;
// border: 1px solid grey;
display:flex;
align-items:center;
justify-content:space-between;

@media (max-width:768px){
    display:inline-block;;
  }


.home-two-primary{
    display:inline-block;
    text-align:center;
    width:70% !important;
    height:100%;
    overflow:hidden;
    @media (max-width:768px){
     width:100% !important;
      };
    
   
    .primary-one{
        font-size:1rem;
        color:grey;
        color:black !important;
        text-align:left;
    };

    .primary-two{
        text-align:justify;
            // margin-right:50%;
            padding:1.2rem;
            font-size:1rem;
            letter-spacing:1px;
            margin-bottom:0.4rem;
    };
};

#home-two-secondary{
    width:30% !important;
    height:100%;
    overflow:hidden;
    // border:1px solid transparent;
    display:inline-block;
    text-align:center;
    align-items:center;
    justify-content:center;
    border-radius:8px !important;
    @media (max-width:768px){
        width:100% !important;
        text-align:center;
        display:inline-block;
        text-align:center;;
      };
    
    
    .visitor-img{
        width:25rem;
        height:20rem;
        border-radius:5px !important;
        margin:auto;
        float:right;
        // border:1px solid purple;
        display:inline-block;
        
        @media (max-width:768px){
            width:100%;
        }
        
    };
    .visitor{
width:100%;
text-align:center;
color:grey;
padding:2px;
cursor:pointer;
font-size:1rem;

@media (max-width:768px){
    margin-top:1rem;
};

&:hover{
    color:blue;
}
    };
}
`

function HomeTwo() {
  return (
    <HomeTwoContainer>
        <div className='home-two-primary'>
            <h1 className='primary-one'>Welcome to Ramya MultiSpeciality Hospital</h1>
            <p className='primary-two'>We offer, an unparalleled spectrum of preventive and diagnostic treatment options across specialties such as Kidney Transplant, Liver Transplant, Oncology, Neuro Sciences, Urology, Gastroenterology, Cardiac Sciences, Orthopaedics, Nephrology, Pulmonology, Aesthetic & Reconstructive Surgery, Endocrinology, and Diabetes and has catered to more than 1mn patients.</p>
            <p className='primary-two'>We have a network of 18 hospitals across 15 cities in underserved tier 2/3 cities of Haryana, Uttar Pradesh, Uttarakhand, Jammu & Kashmir and Delhi under the guidance of over 300+ doctors and medical experts, our hospitals are committed to delivering the highest standard of medical care to each patient who visit us. We ensure to save lives ethically with Dignity, Affordability and using new-age advanced cutting-edge technology.</p>
        </div>
        <div id='home-two-secondary'>
            <img className='visitor-img' src={img3}/>
            <Link to='contact' className='visitor'>Visitor Guide</Link>
        </div>
    </HomeTwoContainer>
  )
}

export default HomeTwo