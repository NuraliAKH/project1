import React from 'react'
import NavbarComponent from '../components/navbar/navbar.component'
import MainContainer from '../containers/home/header/main.container'
import Skillscontainer from '../containers/home/skills/skills.container'
import About from '../containers/home/about us/About.containers'
import './home.page.css'
import Pricing from '../containers/home/pricing/Pricing.containers'
import Contact from '../containers/home/contact us/Contact.containers'
import Footer from '../containers/home/footer/Footer.containers'
export default function Home() {
  return (
    <div className='contianer home-container'>
      <NavbarComponent/>
      <MainContainer/>
      <Skillscontainer/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}
