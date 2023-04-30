import React from 'react'
import styled from 'styled-components'

const SignatureContainer = styled.div`
width:100%;
height:2.2rem;
padding:1% 5%;
display:flex;
align-items:center;
justify-content:flex-end;
color:grey;
background-color:black;
`

function Signature() {
  return (
    <SignatureContainer>Designed & Developed by Komal Sharma (M +91 704-203-1184)</SignatureContainer>
  )
}

export default Signature