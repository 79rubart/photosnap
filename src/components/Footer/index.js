import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo_white.png'
import facebook from '../../assets/img/shared/desktop/facebook.svg'
import instagram from '../../assets/img/shared/desktop/instagram.svg'
import pinterest from '../../assets/img/shared/desktop/pinterest.svg'
import twitter from '../../assets/img/shared/desktop/twitter.svg'
import youtube from '../../assets/img/shared/desktop/youtube.svg'
import BtnArrow from '../BtnArrow'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='l-footer'>
            <div className='l-footer__logo-nav'>

                <div className='l-footer__logo-social'>
                    <img className='l-footer__logo' src={logo} alt='logo' />
                    
                    <div className='l-footer__social'>
                        <Link to=''><img src={facebook} alt='facebook' /></Link>
                        <Link to=''><img src={youtube} alt='youtube' /></Link>
                        <Link to=''> <img src={twitter} alt='twitter' /></Link>
                        <Link to=''><img src={pinterest} alt='pinterest' /></Link>
                        <Link to=''><img src={instagram} alt='instagram' /></Link>
                    </div>
                </div>

                <ul className='l-footer__nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/stories'>Stories</Link></li>
                    <li><Link to='/features'>Features</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                </ul>

            </div>

            <div className='l-footer__call-action'>
                <BtnArrow text='Get an invite' color='white' />
                <p className='l-footer__copy'>Copyright 2019. All Rights Reserved</p>
            </div>

        </footer>
    )
}

export default Footer
