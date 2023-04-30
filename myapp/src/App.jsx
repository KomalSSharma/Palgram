import React, { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HeaderBar from './pages/header/HeaderBar'
import Home from './pages/home/Home'
import Aboutus from './pages/aboutus/Aboutus'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import Booking from './pages/Booking/Booking'
import Carousel from './pages/home/Carousel'
import Layout from './pages/layout/Layout'
import New from './pages/accent/New'
import Modal from 'react-modal';
import ServicesInfo from './pages/services/ServiceInfo'
import Testimonial from './pages/testimonials/Testimonial'
import QuickLink from './pages/quicklink/QuickLink'
import ScrollTop from './pages/ScrollTop'
import Signature from './pages/signature/Signature'


const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#3A98B9',
    // width:'32rem',
    zIndex:3000,
    borderRadius:'8px',
    color:'white',
    
    
  },
};


Modal.setAppElement('#root');

function App() {

 

  const mqLarge  = window.matchMedia( '(min-width: 800px)' );
console.log( mqLarge.matches );

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
    subtitle.style.textAlign='center';
    subtitle.style.fontSize='1.6rem';
    subtitle.style.letterSpacing='2px';
    subtitle.style.lineHeight='0.6rem';
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  return (
    <BrowserRouter>
    <div className="App">
      <ScrollTop/>
      <HeaderBar openModal={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal} 
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Booking"
       
        
      >
        <button onClick={closeModal} className='modal-close'>&#10060;</button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='booking-title'>Book Your Appointment</h2>
        
        {/* <div className='hospital-tital'></div> */}
        <form>
        <input className='input-group' placeholder='Ramay Hospital Moraina Gwalior' required/><br/>
          <input className='input-group' placeholder='Enter Your First Name' required/><br/>
          <input className='input-group' placeholder='Enter Your Last Name' required/><br/>
          <span className='input-group small-group-span'>
          <input className='small-group2' placeholder='+91-'/>
          <input className='small-group' placeholder='Enter Your Mobile Number' required/><br/>
          </span>
          
          <input className='input-group' placeholder='Enter OTP code you received on your mobile number here' required/>
          {/* <input className='input-group small' value='captcha'/> */}
          {/* <button>tab navigation</button>
          <button>stays</button>*/}
          <button className='small'>Verify</button>
          <button className='small'>Submit</button> 
        </form>
      </Modal>
      <Routes>
        
        <Route exact path='/' element={<Home/>} />
        <Route path='about' element={<Aboutus/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='services' element={<Services/>} />
        <Route path='booking' element={<Booking/>} />
        <Route path='serviceInfo/:id' element={<ServicesInfo/>}/>
        

      </Routes> 
      
      <Testimonial/>
      <QuickLink/>
      <Signature/>
    </div>
    </BrowserRouter>
  )
}

export default App
