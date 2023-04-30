import styled from 'styled-components'

export const TopBar = styled.div`
width:100%;
height: 2rem;
display:flex;
align-items:center;
justify-content:flex-end;
padding: 0 5%;
background-color:white;
// position:fixed;
`

export const TopBarContainer= styled.span`
display:flex;
align-items:center;
justify-content:space-between;
// border:1px solid grey;
width:8rem;
float:right;
`

export const TopBarText=styled.h3`
    font-size:0.6rem;
    color:black;
    letter-spacing:2px;
    font-weight:200;
`

export const TopBarOption=styled.select`
    font-size:0.6rem;
    color:black;
    letter-spacing:2px;
    font-weight:200;
    border:1px solid #F5EBEB;
    border-radius:4px;
    text-transform:capitilize
`