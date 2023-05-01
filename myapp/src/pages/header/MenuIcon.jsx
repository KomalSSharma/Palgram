import React, {useState} from 'react'
import styled from 'styled-components'
import RightNavbar from './RightNavbar'

const BurgerMenu=styled.div`
width:2rem;
height:2rem;
position:absolute;
right:2rem;
top:1.7rem;
display:none;
z-index:17;

@media (max-width:768px){
display:flex;
position:absolute;
flex-flow:column nowrap;
justify-content:space-around;
};

div{
    width:2rem;
    height:0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius:0.3rem;
    transform-origin:1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
}

`;

function MenuIcon(props) {
    const[open, setOpen] = useState(false);

  return (
    <>
    <BurgerMenu open={open} onClick={()=>setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </BurgerMenu>
    <RightNavbar open={open} setOpen={setOpen} openModal={props.openModal}/>
    </>
  )
}

export default MenuIcon;