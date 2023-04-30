import React, {useState , useEffect} from 'react'
import styled from 'styled-components';
import DiseaseCard from '../accent/DiseaseCard';
import axios from 'axios'
import { Link } from 'react-router-dom';

const AwardWrapper=styled.div`
width:100%;
padding:0;
// margin:0;
background-color:grey;
border:1px solid red;
`

const AwardsContainer = styled.div`

width:100%;
// padding:2% 5%;
min-height:10rem;
// background-color:#3A98B9;
color:black;
text-align:justify;
margin-bottom:1rem;


 button{

width:6rem;
height:2.5rem;
border:1px solid #3A98B9;
margin-top:0.7rem;
    .bttn{
        
        color:#3A98B9;;
 background-color:white;
 
 width:100%;
 height:100%;
 font-size:1rem;
 text-align:center;
 padding:3px;
    }
 }
`;

export const AwardTitle=styled.h2`

    text-align:left;
    width:100%;
    margin:0.7% 0;
    font-size:1.3rem;
    // border:1px solid red;
    letter-spacing:1px;
    color:black;

`;

export const AwardDesc=styled.p`
text-align:left;
font-size:1rem;
width:100%;
// margin:0.5% 5%;
// border:1px solid red;
padding:0 !important;
letter-spacing:1px !important;
margin-bottom:1rem !important;
`;

function Network() {

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
    <>
        <AwardTitle className='award-title'>Our Network</AwardTitle>
        <AwardDesc className='award-desc'>We are  Home care , Hospital and Clinic .</AwardDesc>
        {/* <AwardsContainer> */}
    {/* <DiseaseCard list={trucatedList}/>  <br/>
    <button ><Link className='bttn' to='services'>View All</Link></button>  */}
    {/* </AwardsContainer> */}
   </>
  )
}

export default Network