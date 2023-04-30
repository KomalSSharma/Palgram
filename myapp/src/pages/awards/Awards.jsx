import React, {useState , useEffect} from 'react'
import styled from 'styled-components';
import DiseaseCard from '../accent/DiseaseCard';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {TbHierarchy3} from 'react-icons/tb'

const AwardWrapper=styled.div`
width:100%;
min-height:20 rem !important;
padding:2% 0;
// margin:0;
// background-color:grey;
// border:1px solid red;
`

const AwardsContainer = styled.div`

width:100%;
// background-color:#3A98B9;
// padding:2% 0
height:20 rem !important;
color:black;
text-align:justify;
margin-bottom:1rem;
// border:1px solid #3A98B9;
margin-top:0.7rem;
display:flex;
align-items:center;
justify-content:space-between;

@media (max-width:768px){
  display:block;
}

.disease-card-text-container{
  display:inline-block;
  text-align:center;
  width:30%;
  overflow:hidden;
  font-size:1.1rem;
  color:black;
  letter-spacing:1px;
  @media (max-width:768px){
    display:block;
    width:100%;
  }
  ;


  .disease-card-text{
    color:grey;
    font-size:0.9rem;
    @media (max-width:768px){
      ;
    }
  }
     
    .disease-card-btn{
          
    color:#3A98B9;;
    background-color:white;
    border:1px solid #3A98B9;
    width:8rem;
   height:100%;
   font-size:1rem;
   text-align:center;
   padding:3px;
   &:hover .bttn{
    color:white;
   };
   .bttn{
    color:#3A98B9;
    &:hover{
      color:white;
    };
   }

   &:hover{
    background-color:#3A98B9;
    color:white;
   }
      }
   
  }


};

.diseaseCard{
  width:70%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  // border:1px solid black;

  @media (max-width:768px){
    display:block;
    width:100%;
  }
}

`;

const AwardTitle=styled.h2`

    text-align:left;
    width:100%;
    margin:0.7% 0;
    font-size:1.3rem;
    // border:1px solid red;
    letter-spacing:1px;
    color:black;
    @media (max-width:768px){

    }

`;

const AwardDesc=styled.p`
text-align:left;
font-size:0.9rem;
width:100%;
// margin:0.5% 5%;
// border:1px solid red;
padding:0 !important;

@media (max-width:768px){

}
`;

function Awards() {

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
    const trucatedList = list.slice(0, 4)
  

  return (
    <AwardWrapper>
        <AwardTitle className='award-title'>Our Speciality</AwardTitle>
        <AwardDesc className='award-desc'>We offer a multitude of specialities under one roof</AwardDesc>
        <AwardsContainer>
          <div className='diseaseCard'>
          <DiseaseCard list={trucatedList} />
          </div>
    
    <div className='disease-card-text-container'>Ramya Hospital Expertise <TbHierarchy3/>
      <p className='disease-card-text'>We have been treating patients with over 30+ specialities across Delhi, Haryana, Uttrakhand, Uttar Pradesh and Srinagar.</p>
      <button className='disease-card-btn'><Link className='bttn' to='services'>View All</Link></button>
    </div>
    
    </AwardsContainer>
   </AwardWrapper>
  )
}

export default Awards