import React from 'react'
import './StyleContact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {GrMail} from 'react-icons/gr'
import { FaAngleDoubleRight } from 'react-icons/fa'
import PageHeader from '../pageHeader/PageHeader'
import contact from '../../assets/contact.jpg'
import QuickLink from '../quicklink/QuickLink'

function Contact() {
  return (
   <>
   <PageHeader
   img={contact}
   title='Contact us'/>
  <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
        <ImLocation2/>
          <div className="topic">Address</div>
          <div className="text-one">Moraina Gwalior</div>
          <div className="text-two">Madhya Pradesh</div>
        </div>
        <div className="phone details">
          <BsFillTelephoneFill/>
          <div className="topic">Phone</div>
          <div className="text-one">+91 1234 5647</div>
          <div className="text-two">+91 4321 5678</div>
        </div>
        <div className="email details">
         <GrMail/>
          <div className="topic">Email</div>
          <div className="text-one">test@gmail.com</div>
          <div className="text-two">test2@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message </div>
        <p>If you have any other query please write to us.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          <textarea placeholder='Enter your message here'/>
          
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
    
  </div>
  
  </>
  )
}

export default Contact