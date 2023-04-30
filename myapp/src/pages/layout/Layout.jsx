import React from 'react'
import styled from 'styled-components'
import LanguageBar from '../language/LanguageBar'
import HeaderBar from '../header/HeaderBar'
import Home from '../home/Home'
import { Outlet } from 'react-router-dom'

const LayoutContainer=styled.div`
width:100%;
height:100%;

nav{
    width:100%;
    height:6rem;
};
main{
    width:100%;
    height:auto;
}
`

function Layout() {
  return (
    <LayoutContainer>
        <nav>
            <LanguageBar/>
            <HeaderBar/>
        </nav>
        <main>
    <Outlet/>
        </main>
    </LayoutContainer>
  )
}

export default Layout