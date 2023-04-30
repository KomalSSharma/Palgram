import React from 'react'
import styled from 'styled-components';
import { AiFillCar} from 'react-icons/ai'
import { BsFillBusFrontFill} from 'react-icons/bs'
import {FaWheelchair} from 'react-icons/fa'

const AccessContainer=styled.div`
width:100%;
background-color:#3A98B9;
color:white;
display:felx;
align-items:center;
justify-content:space-between;
font-size:5rem;
padding:2% 5%;
margin-bottom:1rem;
@media (max-width: 680px) {
    font-size:3rem;
    display:inline-block;
    text-align:center;
    
}

.access-items{
    display:block;
    width:calc(100%/3);
    // border:1px solid red;
    text-align:center;
    @media (max-width:680px){
        width:100%;
        margin-bottom:2rem;
    }

    .access-text{
        font-size:1.5rem;
        color:white;

        @media (max-width: 680px) {
            font-size:1rem;
        };
    };

    .secondary{
        font-size:1rem;
        @media (max-width: 680px) {
            font-size:0.8rem;
            padding:2px 4px;
        }
    }
}
`

function AccessRoutes() {
  return (
    <AccessContainer>
        <div className='access-items'>
            <AiFillCar/>
            <p className='access-text'>Parking Space</p>
            <p className='access-text secondary'>You can park your car just outside</p>
            </div>
        <div className='access-items'><BsFillBusFrontFill/>
        <p className='access-text'>Bus Routes</p>
        <p className='access-text secondary'>Bus no.23 leaves you just in front</p>
        </div>
        <div className='access-items'><FaWheelchair/>
        <p className='access-text'>Accessibility</p>
        <p className='access-text secondary'>We use ramps for easier access.</p>
        </div>
    </AccessContainer>
  )
}

export default AccessRoutes