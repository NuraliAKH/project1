import React from 'react'
import './Contact.containers.css'
import Img from '../../../assets/Ресурс 1 1.png'

export default function Contact() {
  return (
    <div className='container contact_container'>
        <img className='contact_image' src={Img} alt="" />
        <div className="contact_text">
            <p className='contact_title'>Contact Us</p>
            <p className='contact_desc'>Discover your current English level by taking our free
online English test.Sign up to our newsletter for learning 
tips and free resource</p>
            <div className="contact_input">
                <input type="text" placeholder='Enter Your E-mail'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
