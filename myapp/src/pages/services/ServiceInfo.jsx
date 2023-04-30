import React, {useState , useEffect} from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight } from 'react-icons/fa'
import service1 from '../../assets/service1.jpg'
import health from '../../assets/health.webp'
import DiseaseCard from '../accent/DiseaseCard'
import New from '../accent/New'
import QuickLink from '../quicklink/QuickLink'
import PageHeader from '../pageHeader/PageHeader'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ServiceInfoContainer = styled.div`
width:90%;
text-align:left;
margin:0 2.5%;
margin-top:4rem;
display:inline-block;


`

function ServiceInfo() {

    const param = useParams();

    const[info , setInfo] = useState([])

    useEffect(()=>{
      axios({
          method:'get',
          url: `/local-json/db.json/${param.id}`
      }).then(response=>{
          setInfo(response.data);
          console.log(response.data)
      })
  },[param.id]);

  
  return (
    <>
     <PageHeader
    title='Services'
    img={health}/>
    {info && info.map((item)=>
    <ServiceInfoContainer key={item.id}>
    <div>{item.title}</div>
    <div>{item.id}</div>
    <div>Type</div>
    </ServiceInfoContainer>
    )}
    
    {/* <QuickLink/> */}
   
    </>
  )
}

export default ServiceInfo