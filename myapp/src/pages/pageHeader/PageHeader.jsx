import React from 'react'
import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';

const PageContainer = styled.div`
width:100%;
height:27rem;
text-align:left;
margin-top:4rem;

.service-cap{
width:100%;
height:100%;
img{
  width:100%;
  height:100%;
}
};
.service-title{
  width:95%;
  margin-left:2.5%;
  margin-top:1rem;
  display:flex;
  align-items:center;
  h2{
    text-align:left;
   
    margin:0.7% 0;
    font-size:1.3rem;
    // border:1px solid red;
    letter-spacing:1px;
    color:black;
  }
 
};
.icon{
  margin-top:0.2rem;
  float:right;
  margin-left:0.2rem;
  color:goldenrod;
};`

function PageHeader(props) {
  return (
    <PageContainer>
    <div className='service-cap'>
        <img src={props.img}/>
      </div>
      <div className='service-title'>
      <h2>{props.title}</h2>
      <FaAngleDoubleRight className='icon'/>
      </div>
      </PageContainer>
  )
}

export default PageHeader