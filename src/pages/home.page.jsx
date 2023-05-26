import React from 'react'
import NavbarComponent from '../components/navbar/navbar.component'
import MainContainer from '../containers/home/header/main.container'
import './home.page.css'

export default function Home() {
  return (
    <div className='contianer home-container'>
      <NavbarComponent/>
      <MainContainer/>
    </div>
  )
}
