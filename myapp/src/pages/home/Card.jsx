import React from 'react';
import clinic from '../../assets/clinic.jpg'
import hospital from '../../assets/hospital.jpg'
import homeCare from '../../assets/homeCare.jpg';
import clinic2 from '../../assets/clinic2.jpg'
import styled from 'styled-components'

const CardContainer=styled.div`
width:100%;
height:100%;
// border:1px solid grey;
padding:0 !important;
.cards{
    width:100%;
    padding:0;
    min-height: 14rem;
    // background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top:10%; */
    @media (max-width:768px){
        display:inline-block;
    }
    
}

/* ****************from Komal */
.card{
    width:32.5%;
    height: 20rem;
   border-radius: 1rem;
   margin-bottom:0.4rem;
    position: relative;
    overflow: hidden;
    background-color:transparent;
    // border:1px solid rgb(223, 221, 221);
    @media (max-width:768px){
        width:100%;
        height:16rem;
        background-color:transparent;
    }
}
.card:hover{
    box-shadow: 1px 1px 20px grey;
}
.card:hover .text{
    visibility: visible;
}

.image{
    width:100%;
    height: 100%;
    border-radius: 1rem;
    overflow:hidden;
  
    
}

.image img{
    width:100%;
    height: 100%;
    object-fit: cover;
    overflow:hidden;
}


.text{
    font-size: 1.5rem;
    top:0;
    left:0;
    background-color: rgb(5, 5, 5);
    width:100%;
    height: 100%;
    opacity: 0.8;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color:rgb(14, 12, 12);
    position: absolute;
    top:0;
    left:0
}
.text .text-h, .text-a{
    font-size: 1.4rem;
    // color:rgb(0, 247, 255);
    color:white;
    cursor: pointer;
    text-transform: capitalize;
    text-shadow: -1px -1px 0 #963989, 1px -1px 0 #963989, -1px 1px 0 #963989, 1px 1px 0 #963989;
    text-decoration: none;;
} 

`

function Card() {
const data = [
    {src:hospital,
    href:'#',
title:'Hospital'},
    {src:homeCare,
        href:'#',
        title:'Home Care'},
    {src:clinic2,
        href:'#',
        title:'Clinic'}
]
 
  return (
    <CardContainer>
    <div className='cards'>
      
        
                {data.map((item, index)=>
                    <div className='card' key={index}>
                        <div className='image'>
                 <img src={item.src}/>
                </div> 
                <div className='text'>
                    <h1 className='text-h'><a className='text-a' href={item.href}>{item.title}</a></h1>
                </div>
                
            </div>
                )}
                
            </div>
            </CardContainer>   
            
 
  )
}

export default Card