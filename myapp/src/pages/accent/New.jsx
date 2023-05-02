import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import spinal from '../../assets/spinal.jpg';
import urology from '../../assets/urology.jpg';
import neurology from '../../assets/neurology.jpg';
import cardiology from '../../assets/cardiology.jpg'
import clinic from '../../assets/clinic.jpg'
import orthopedic from '../../assets/orthopedic.jpg'
import { AwardDesc, AwardTitle } from '../awards/Network';

const SyncSlider = styled.div`
width:100%;
min-height:25rem;
text-align:left;
// padding:1rem !important;
display:inline-block;
// border:1px solid #EEEEEE;
margin-top:0.4rem;

.syn-header{
    font-size:1.3rem;
};

.syn-desc{
    font-size:0.8rem;
    margin-bottom:0.4rem;
};
.title-slider{
    width:100% !important;
    height:15rem !important;
    display:flex !important;
    align-items:center;
    justify-content:center;
    // border-radius:1rem;
    background-color:#EEEEEE;
    // border:1px solid #3A98B9;

    .title-img-container{
        width:50%;
        height:100%;
        // border:1px solid black;
        overflow:hidden;
        border-radius:1rem;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        padding-right:1rem;
        

        .title-img{
            width:10rem;
            height:10rem;
            object-fit: cover;
            object-position:center;
            overflow:hidden !important;
            border-radius:50%;
            padding:4px;
            border:1px solid #3A98B9;
            // border-radius:1rem;
            
        };
    };

    .title-text-container{
        text-align:justify;
        // font-size:1rem;
        display:inline-block;
        width:50%;
        margin-left:0;
        // border:1px solid green;
        padding:0 !important;

        .title-first{
            font-size:1rem;
            margin-bottom:0.4rem;
            font-weight:500;

        };
        .title-two{
            font-size:0.9rem;
            color:black;
            padding-right:1rem !important;
            text-align:center;
            font-weight:400;
            width:50%;
            border:1px solid grey;
        };

        .ul{
            list-style:none;
            
            .li{
              font-size:0.9rem !important;
            }
        };
    };
   
};

.body-slider{
    width:100%;
    height:18%;
    display:flex !important;
    align-items:center;
    justify-content:center ;
    // border:1px solid purple;
    padding:0.3rem;
    margin:0 1rem;
    background-color:#3A98B9;

    .body-slider-img{
        width:7rem;
        height:7rem;
        border-radius:50%;
        border:1px solid #EEEEEE;
        padding:2px;
    };
}
`

export default function New(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const firstSliderData=[
    {src:orthopedic,
        title:'A strong core can stabilize your spine to help keep your lower back healthy and pain-free.',
        heading:'Orthopedic',
    content:{
        list1:'Side Plank',
        li2:'Curl -up',
        li3:'Bird-Dog'
    }},
    {src:urology,
        title:'Keep Your Heart Healthy three big excercises to achieve',
        heading:'Urology',
    content:{
        list1:'Eat healthy',
        li2:'Move more',
        li3:'Quit Smoking'
    }},
    {src:neurology,
        title:'A strong core can stabilize your spine to help keep your lower back healthy and pain-free.',
        heading:'Neurology',
    content:{
        list1:'Side Plank',
        li2:'Curl -up',
        li3:'Bird-Dog'
    }},
    {src:cardiology,
        title:'A strong core can stabilize your spine to help keep your lower back healthy and pain-free.',
        heading:'Cardiology',
    content:{
        list1:'Side Plank',
        li2:'Curl -up',
        li3:'Bird-Dog'
    }},
    {src:spinal,
        title:'A strong core can stabilize your spine to help keep your lower back healthy and pain-free.',
        heading:'Spinal',
    content:{
        list1:'Side Plank',
        li2:'Curl -up',
        li3:'Bird-Dog'
    }},
    {src:orthopedic,
        title:'A strong core can stabilize your spine to help keep your lower back healthy and pain-free.',
        heading:'Orthopedic',
    content:{
        list1:'Side Plank',
        li2:'Curl -up',
        li3:'Bird-Dog'
    }},


  ]


  var setting ={

    asNavFor : nav1,
        ref : (slider2) => setNav2(slider2),
        slidesToShow:5,
        className: "center",
        swipeToSlide:true,
        autoplay:true,
        focusOnSelect:true,
        centerMode: true,
        centerPadding: "60px",
        speed: 1000,
        // rtl= {true}
        infinite: true,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  }

  return (
    <SyncSlider>
         <AwardTitle className='award-title'>Health Tips</AwardTitle>
        <AwardDesc className='award-desc'>Simple steps you can take to improve your health</AwardDesc>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} fade={true}>
        {firstSliderData.map((item , index)=>
        <div className='title-slider' key={index}>
        <div className='title-img-container'>
          <img className='title-img' src={item.src}/>
        </div>
        <div className='title-text-container'>
            <h2 className='title-first'>{item.heading}</h2>
          <h3 className='title-two'>{item.title}</h3>
          <ul className="ul">
              <li classsName='li'>{item.content.list1}</li>
              <li classsName='li'>{item.content.li2}</li>
              <li classsName='li'>{item.content.li3}</li>
              </ul></div>
      </div>
        )}          
      </Slider>
      <Slider
        {...setting}
      >
        {firstSliderData.map((item,index)=>
        <div className='body-slider' key={index}>
        <img className='body-slider-img' src={item.src}/>
      </div>
        )}
      </Slider>
    </SyncSlider>
  );
}
