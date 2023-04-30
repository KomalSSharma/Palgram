import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AccentLayout = styled.div`

width:100%;
padding:1rem 3rem;
height:15rem;
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , color:'white'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", color:'white' }}
      onClick={onClick}
    />
  );
}

const AccentContainer = () => {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
  };

  const myData =[
    {title:'Hospital',
  body:'hfgfhjdfjh'},
  {title:'Clinic',
  body:'h11111111111111'},
  {title:'HomeCare',
  body:'22222222'},
  {title:'Emergency',
  body:'65723752'},
  {title:'Access & Transportation',
  body:'6464646'},
  ]
  return (
    <AccentLayout>
        <Slider {...settings}>
          {myData.map((item, index)=>
          <div key={index}>
            <h3>{item.title}</h3>
          </div>
          )}
        </Slider>

    </AccentLayout>
  )
}

export default AccentContainer