import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components'
import one from '../../assets/one.jpg';
import HeroSlider , {Slide} from 'hero-slider';

const SliderContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-flow:row wrap;
align-items:center;
justify-content:center;
overflow:hidden;
// padding:0 5%;
.slide-div{
  display:flex;
  width:100%;
  height:100%;
  align-items:center;
  justify-content:center;
  background:url('../../assets/one');
  background-size: contain, cover;
  background-repeat:no-repeat;
};
.slide-img{
  width:100%;
  height:100%;
  background-size:cover;
  background-repeat:no-repeat;
}
`

function SliderImage() {
  const one = '../../assets/one.jpg';
  console.log(one)
  const two = '../../asstes/HIMS-IPD-1.webp'
  const three = '../../asstes/HIMS-IPD-2.webp'
  const four = '../../asstes/HIMS-1.webp'
  


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (       
    <SliderContainer>
      <HeroSlider
      slidingAnimation='left_to_right'
      orientation ='horizontal'
      initialSlide={one}
      onBeforeChange={(pre, next)=>console.log("onBeforeChange", pre , next)}
      onChange={nextSlide=>console.log('nextSlide', nextSlide)}
      onAfterChange={(nextSlide)=>console.log('onAfterChange', nextSlide)}
      style={{
        background:"rgba(0, 0, 0, 0.33)"
      }}
      setting={{
        slidingDuraton:250,
        slidingDelay:100,
        shouldAutoplay:true,
        shouldDisplayButton:true,
        autoplayDuration:5000,
        height:'100%'
      }}>
        <Slide
        background={{
          backgroundImage: one,
          backgroundAttachment:'fixed'
        }}/>
        <Slide
        background={{
          backgroundImage: two,
          backgroundAttachment:'fixed'
        }}/>
        <Slide
        background={{
          backgroundImage: three,
          backgroundAttachment:'fixed'
        }}/>
        <Slide
        background={{
          backgroundImage: four,
          backgroundAttachment:'fixed'
        }}/>
      </HeroSlider>
    </SliderContainer>
  )
}

export default SliderImage