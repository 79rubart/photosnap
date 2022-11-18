import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import BtnDefault from '../BtnDefault'
import './Navbar.css'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)


    return (
        <>
            <nav className='c-navbar'>
                <Link to='/'><img className='c-navbar__item' src={logo} alt='logo' /></Link>
                <ul className={!isActive ? 'c-navbar__menu' : 'c-navbar__menu c-navbar__menu--active'}>
                    <li className='c-navbar__item'>
                        <Link to='/' onClick={() => {setIsActive(!isActive)}}>Home</Link>
                    </li>
                    <li className='c-navbar__item'>
                        <Link to='/stories' onClick={() => {setIsActive(!isActive)}}>Stories</Link>
                    </li>
                    <li className='c-navbar__item'>
                        <Link to='/features' onClick={() => {setIsActive(!isActive)}}>Features</Link>
                    </li>
                    <li className='c-navbar__item'>
                        <Link to='/pricing' onClick={() => {setIsActive(!isActive)}}>Pricing</Link>
                    </li>
                </ul>
                <BtnDefault bgColor='black' text='Get an invite' />
                <div className={!isActive ? 'c-navbar__hamburger' : 'c-navbar__hamburger c-navbar__hamburger--active'} onClick={() => { setIsActive(!isActive) }}>
                    <span className='c-hamburger__bar'></span>
                    <span className='c-hamburger__bar'></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar