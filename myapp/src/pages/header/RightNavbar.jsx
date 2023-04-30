import React,{useState , useEffect} from 'react'
import styled from 'styled-components'
import { Link , useLocation, useParams } from 'react-router-dom'



const Ulist=styled.ul`
    list-style:none;
    display:flex;
    flex-flow:row nowrap;
    width:70%;
    justify-content:space-evenly;
    // border:1px solid black;
    position:absolute;
    right:0;
    top:1.4rem;
    text-align:right;
    // padding:0 0.3rem;
    // padding-right:1rem;


    li{
        margin:0 0.8rem;
        font-size:0.8rem;
        letter-spacing:3px;
        border-bottom:2px solid transparent;
        padding-bottom:0.3rem;

        &:hover{
            border-bottom:2px solid purple;
        };
    };



    @media (max-width:768px){
        transform: ${({open})=> open? 'translateX(0)': 'translateX(100%)'};
        flex-flow:column nowrap;
        background-color: #18122B;
        position:fixed;
        height:100vh;
        color:grey;
        padding-top:0.3rem;
        top:0;
        right:0;
        transition: transform 0.3s all ease-in-out;
        width:40%;
    
        li{
                color:grey;
                padding-top:0.4rem;
                font-size:0.9rem;
                font-weight:400;
                letter-spacing:2px;
                text-align:center;
                cursor:pointer;
                transition:0.3s all ease-in-out;

                &:hover{
                    background-color:#EEEEEE;
                    color:white;
                    // color: #fff;
                    //  &:before {
                    // transform: scaleY(1);
                    // opacity: 1;
        }
                }
        }
    }

`




function RightNavbar({open , setOpen , openModal}) {

    

    const {pathname} = useLocation();

  return (
    
         <Ulist open={open}>
            <li onClick={()=>setOpen(!open)}><Link className='router-link' to='/'>Home</Link></li>
            <li onClick={()=>setOpen(!open)}><Link className='router-link' to='/services'>Services</Link></li>
            <li onClick={()=>setOpen(!open)}><Link className='router-link' to='about'>About</Link></li>
            <li onClick={()=>setOpen(!open)}><Link className='router-link' to='contact'>Contact</Link></li>
            <li onClick={openModal}><Link className='router-link'>Book Appointment</Link></li>
        </Ulist>
        

    
  )
}

export default RightNavbar