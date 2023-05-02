import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import { ImQuotesRight , ImQuotesLeft} from 'react-icons/im'

const TestimonialContainer=styled.div`
width:100%;
padding:2% 5%;
min-height:10rem;
background-color:#EEEEEE;
color:#3A98B9;
text-align:center;
margin-bottom:1rem;

.test-item{
    display:inline-block;
    text-align:center;
    margin-top:0.5rem;
    h4{
        font-style: italic;
        font-size:1rem;
    }
}
`

function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };

      const tests=[
        {
            title:'Neurology',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        },
        {
            title:'Cardiology',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        },
        {
            title:'Urology',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        },
        {
            title:'Dermatology',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        },
        {
            title:'Spinal',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        },
        {
            title:'Neurology',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        }
      ]

  return (
    <TestimonialContainer>
    <h2> Patient Testimonials</h2>
    <Slider {...settings}>
        {tests && tests.map((item, index)=>
        <div className='test-item' key={index}>
        <h4> <ImQuotesLeft/>{item.desc}<ImQuotesRight/></h4>
        <h5>{item.title}</h5>
      </div>
        )}
      
      
    </Slider>
  </TestimonialContainer>
  )
}

export default Testimonial