import React, {useState , useEffect} from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight } from 'react-icons/fa'
import service1 from '../../assets/service1.jpg'
import health from '../../assets/health.webp'
import DiseaseCard from '../accent/DiseaseCard'
import New from '../accent/New'
import QuickLink from '../quicklink/QuickLink'
import PageHeader from '../pageHeader/PageHeader'
import axios from 'axios'

const ServicesContainer = styled.div`
width:90%;
// height:100%;
text-align:left;
margin:0 2.5%;
margin-top:4rem;

.service-cap{
width:100%;
height:20rem;
img{
  width:100%;
  height:100%;
}
};
.service-title{
  width:100%;
  margin-top:1rem;
  display:flex;
  align-items:center;

  h1{
    font-size:1.4rem;
    font-weight:bold;
  };

  .icon{
    margin-top:0.2rem;
    float:right;
    margin-left:0.2rem;
    color:goldenrod;
  };
 
};

.service-body{
  width:100%;
  height:auto;
  margin-top:1rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

  @media (max-width:480px){
    display:block;
  };
  @media (max-width:1039px){
    display:flex;
    justify-content:center;
    align-items:center;
  }
  
}
`

function Services() {

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


 
  
  return (
    <>
     <PageHeader
    title='Services'
    img={health}/>
    <ServicesContainer>
     <div className='service-body'>
    <DiseaseCard list={list}/>
     </div>
     <New/>
    </ServicesContainer>
    {/* <QuickLink/> */}
   
    </>
  )
}

export default Services