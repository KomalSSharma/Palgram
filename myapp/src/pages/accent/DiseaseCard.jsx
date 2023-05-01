import React, { useState, useEffect } from 'react'
import cardiology from '../../assets/cardiology.jpg'
import styled from 'styled-components'
import urology from '../../assets/urology.jpg'
import neurology from '../../assets/neurology.jpg'
import orthopedic from '../../assets/orthopedic.jpg'
import spinal from '../../assets/spinal.jpg'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const DiseaseContainer=styled.div`
width:20%;
height:15rem;
margin:0.5rem;
// padding:0.7rem;
background-color:#EEEEEE;
display:inline-block;
border:1px solid grey;
border-radius:6px;
padding:0.5rem;
text-align:center;


@media (max-width:480px){
  width:100% !important;
};


@media (max-width:1039px){
  width:40%;
  
};




.disease-cap{
  width:100%;
  height:70%;
  overflow:hidden;
  // border:1px solid red;
  transition:1s;
  &:hover img {
    transform:scale(1.5);
  };

  img{
    width:100%;
    height:100%;
    border-radius:6px;
    transfomr:scale(1);
    overflow:hidden;
    transition:2s ease-in;
    
  };
};

.disease-title{
  width:100%;
  display:inline-block;
  height:30%
  align-items:center;
  justify-content:space-between;
  text-align:center;

  h3{
    font-size:1.1rem;
    font-weight:400;
    text-transform:capitilize;
    letter-spacing:1px;
    color:black;

    @media (max-width:680px) and (min-width:481px){
      font-size:0.8rem;
      
    };
  };
  button{
    width: 8rem;
    height: 1.8rem;
    color: white;
    // border:1px solid grey;
    // background-color: #3A98B9;
    background-color:#EEEEEE;
    font-size: 0.8rem;
    text-align: center;
    padding: 4px;
    border-radius: 5px;

    @media (max-width:680px){
      font-size:0.6rem;
      
    };
  };
 

    .button-link{
      width: 8rem;
      height: 1.8rem;
      color: #3A98B9;
      // background-color: #3A98B9;
     
      font-size: 0.8rem;
      text-align: center;
      // padding: 4px;
      // border-radius: 5px;
  
      @media (max-width:680px){
        font-size:0.6rem;
        
      };
    }
  
  
}
`

function DiseaseCard(props) {
  const param = useParams()

  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "/local-json/db.json"
    })
      .then(response => {
        setList(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [setList]);

  

   

  // const data =[
  //   {
  //     title:'Cardiology',
  //     src:cardiology,
  //   },
  //   {
  //     title:'Urology',
  //     src:urology,
  //   },
  //   {
  //     title:'Spinal',
  //     src:spinal,
  //   },
  //   {
  //     title:'Pediatrics',
  //     src:orthopedic,
  //   },
  //   {
  //     title:'Orthopedic',
  //     src:orthopedic,
  //   },
  //   {
  //     title:'Dermatology',
  //     src:cardiology,
  //   },
  //   {
  //     title:'Cancer',
  //     src:cardiology,
  //   },
  //   {
  //     title:'Physician',
  //     src:urology,
  //   },
  //   {
  //     title:'Medicine',
  //     src:neurology,
  //   },
  //   {
  //     title:'Laproscopic',
  //     src:orthopedic,
  //   },
  //   {
  //     title:'Physiology',
  //     src:cardiology,
  //   },
  //   {
  //     title:'ENT',
  //     src:cardiology,
  //   },
  // ]
  return (
<>
    { props.list && props.list.map((item, index)=>
      <DiseaseContainer key={index}>
      <div className='disease-cap'>
        <img src={item.src}/>
      </div>
      <div className='disease-title'>
        <h3>
          {item.title}
        </h3>
        <button className="btt-btt"><Link className='button-link' to={'/serviceInfo/' + item.id} >More</Link></button>
      </div>
    </DiseaseContainer>
  )}
   </> 
  )
}


export default DiseaseCard