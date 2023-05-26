import React from 'react'
import './navbar.component.css'
import { navItemData } from './navbarItems'

const britlexLogoSvg = <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.78 12.23C11.54 12.35 12.23 12.66 12.85 13.16C13.49 13.66 13.99 14.28 14.35 15.02C14.73 15.76 14.92 16.55 14.92 17.39C14.92 18.45 14.65 19.41 14.11 20.27C13.57 21.11 12.78 21.78 11.74 22.28C10.72 22.76 9.51 23 8.11 23H0.31V2.09H7.81C9.23 2.09 10.44 2.33 11.44 2.81C12.44 3.27 13.19 3.9 13.69 4.7C14.19 5.5 14.44 6.4 14.44 7.4C14.44 8.64 14.1 9.67 13.42 10.49C12.76 11.29 11.88 11.87 10.78 12.23ZM3.04 11.12H7.63C8.91 11.12 9.9 10.82 10.6 10.22C11.3 9.62 11.65 8.79 11.65 7.73C11.65 6.67 11.3 5.84 10.6 5.24C9.9 4.64 8.89 4.34 7.57 4.34H3.04V11.12ZM7.87 20.75C9.23 20.75 10.29 20.43 11.05 19.79C11.81 19.15 12.19 18.26 12.19 17.12C12.19 15.96 11.79 15.05 10.99 14.39C10.19 13.71 9.12 13.37 7.78 13.37H3.04V20.75H7.87ZM21.4384 9.23C21.9184 8.29 22.5984 7.56 23.4784 7.04C24.3784 6.52 25.4684 6.26 26.7484 6.26V9.08H26.0284C22.9684 9.08 21.4384 10.74 21.4384 14.06V23H18.7084V6.56H21.4384V9.23ZM31.3098 3.89C30.7898 3.89 30.3498 3.71 29.9898 3.35C29.6298 2.99 29.4498 2.55 29.4498 2.03C29.4498 1.51 29.6298 1.07 29.9898 0.709999C30.3498 0.349999 30.7898 0.169999 31.3098 0.169999C31.8098 0.169999 32.2298 0.349999 32.5698 0.709999C32.9298 1.07 33.1098 1.51 33.1098 2.03C33.1098 2.55 32.9298 2.99 32.5698 3.35C32.2298 3.71 31.8098 3.89 31.3098 3.89ZM32.6298 6.56V23H29.8998V6.56H32.6298ZM40.6127 8.81V18.5C40.6127 19.3 40.7827 19.87 41.1227 20.21C41.4627 20.53 42.0527 20.69 42.8927 20.69H44.9027V23H42.4427C40.9227 23 39.7827 22.65 39.0227 21.95C38.2627 21.25 37.8827 20.1 37.8827 18.5V8.81H35.7527V6.56H37.8827V2.42H40.6127V6.56H44.9027V8.81H40.6127Z" fill="black"/>
<path d="M50.9404 0.8V23H48.2104V0.8H50.9404ZM70.5932 14.15C70.5932 14.67 70.5632 15.22 70.5032 15.8H57.3632C57.4632 17.42 58.0132 18.69 59.0132 19.61C60.0332 20.51 61.2632 20.96 62.7032 20.96C63.8832 20.96 64.8632 20.69 65.6432 20.15C66.4432 19.59 67.0032 18.85 67.3232 17.93H70.2632C69.8232 19.51 68.9432 20.8 67.6232 21.8C66.3032 22.78 64.6632 23.27 62.7032 23.27C61.1432 23.27 59.7432 22.92 58.5032 22.22C57.2832 21.52 56.3232 20.53 55.6232 19.25C54.9232 17.95 54.5732 16.45 54.5732 14.75C54.5732 13.05 54.9132 11.56 55.5932 10.28C56.2732 9 57.2232 8.02 58.4432 7.34C59.6832 6.64 61.1032 6.29 62.7032 6.29C64.2632 6.29 65.6432 6.63 66.8432 7.31C68.0432 7.99 68.9632 8.93 69.6032 10.13C70.2632 11.31 70.5932 12.65 70.5932 14.15ZM67.7732 13.58C67.7732 12.54 67.5432 11.65 67.0832 10.91C66.6232 10.15 65.9932 9.58 65.1932 9.2C64.4132 8.8 63.5432 8.6 62.5832 8.6C61.2032 8.6 60.0232 9.04 59.0432 9.92C58.0832 10.8 57.5332 12.02 57.3932 13.58H67.7732ZM82.7767 23L78.8767 16.88L75.1267 23H72.2767L77.5867 14.84L72.2767 6.56H75.3667L79.2667 12.65L82.9867 6.56H85.8367L80.5567 14.69L85.8667 23H82.7767Z" fill="#939393"/>
</svg>


const navItems = <ul className='navbar-component-nav'>
    {
        navItemData.map(item => {
            return (
                <li className='navbar-component-nav-item'>
                    <a href={item.path} className=''>{item.title}</a>
                </li>
            )
        })
    }
</ul>


export default function NavbarComponent() {
  return (
    <div className='navbar-container'>
        <div className="navbar-component">
            {britlexLogoSvg}
            {navItems}
            <a href='/home' className='navbar-component-nav-btn'>Let’s Talk</a>
        </div>
    </div>
  )
}
