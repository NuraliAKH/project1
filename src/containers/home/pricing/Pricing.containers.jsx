import React from 'react'
import './Pricing.container.css'
import Img3 from '../../../assets/Webinar-bro 2.png'
import Img2 from '../../../assets/Lesson-bro 1.png'
import Img1 from '../../../assets/Online test-bro 1.png'

export default function Pricing() {
  return (
    <div className='container pricing_container'>
      <p className='pricing_title'>Pricing</p>
      <div className="d-flex">
        <div className="pricing_card">
          <img className='img1' src={Img1} alt="" />
          <p className='card_title'>
            Self-study online course
          </p>
          <p className='card_desc'>
            Start learning English online in live <br /> classes 
            with qualified EC teachers <br />and students from all over the world.
          </p>
          <p className='card_price'>
            <span>£5.99</span>
            per month
          </p>
        </div>

        <div className="pricing_card">
          <img className='img2' src={Img2} alt="" />
          <p className='card_title2'>
          Live online classes
          </p>
          <p className='card_desc2'>
          Interactive group classes with expert
teachers. Free 7-day trial
          </p>
          <p className='card_price2'>
            <span>£12.99</span>
            per month
          </p>
        </div>

        <div className="pricing_card">
          <img className='img3' src={Img3} alt="" />
          <p className='card_title3'>
          Personal Tuition
          </p>
          <p className='card_desc3'>
          Online one-to-one English tutoring – enjoy
our first session for only $1
          </p>
          <p className='card_price3'>
            <span>£20.99</span>
            per month
          </p>
        </div>
      </div>
    </div>
  )
}
