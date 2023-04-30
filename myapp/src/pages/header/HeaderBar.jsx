import React, { useState } from 'react'
import LanguageBar from '../language/LanguageBar'
import { HeaderContainer  } from './StyleHeaderBar'
import { BiGridAlt } from "react-icons/bi";
import logo2 from '../../assets/logo2.png'
import './StyleHeaderBar.css'
import RightNavbar from './RightNavbar';
import MenuIcon from './MenuIcon';
import { Link } from 'react-router-dom';

function HeaderBar(props) {

    const[toggle, setToggle] = useState(false)
  return (
    <>
    <LanguageBar/>
    <HeaderContainer>
       
        <div className='header-logo'>
                <img src={logo2}/><Link to='/'  className='brand-name'>Ramay</Link>
            </div>
            {/* <div className='menu-icon'> */}
            <MenuIcon openModal={props.openModal}/>
            {/* </div> */}
            
    </HeaderContainer>

    </>
  )
}

export default HeaderBar