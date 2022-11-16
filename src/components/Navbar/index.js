import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)


    return (
        <>
            <nav className='c-navbar'>
                <Link to='/'><img className='c-navbar__item' src={logo} alt='logo' /></Link>
                <ul className='c-navbar__menu'>
                    <li className='c-navbar__item'>
                        <Link to='/stories'>Stories</Link>
                    </li>
                    <li className='c-navbar__item'>
                        <Link to='/features'>Features</Link>
                    </li>
                    <li className='c-navbar__item'>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                </ul>
                <div className='c-navbar__hamburger' onClick={() => {setIsActive(!isActive)}}>
                    <span className='c-hamburger__bar'></span>
                    <span className='c-hamburger__bar'></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar