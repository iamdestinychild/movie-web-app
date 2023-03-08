import React from 'react'
import {NavLink} from 'react-router-dom'
import '../assets/style/nav.css'
import logo from '../assets/images/logo.png'


function Nav() {
  return (
    <div className='nav'>
      <img src={logo} alt='logo' className='nav_logo' />
      <ul>
        <li>
        <NavLink to='/shows'>Shows</NavLink>
        </li>

        <li>
        <NavLink to='/movies'>Movies</NavLink>
        </li>

        <li>
        <NavLink to='/compare'>Compare</NavLink>
        </li>
        <li>
        <NavLink to='./about'>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav