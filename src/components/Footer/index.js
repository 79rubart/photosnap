import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/shared/desktop/facebook.svg'
import instagram from '../../assets/img/shared/desktop/instagram.svg'
import pinterest from '../../assets/img/shared/desktop/pinterest.svg'
import twitter from '../../assets/img/shared/desktop/twitter.svg'
import youtube from '../../assets/img/shared/desktop/youtube.svg'
import BtnArrow from '../BtnArrow'

const Footer = () => {
    return (
        <footer className='l-footer'>
            <img src={logo} alt='logo' />

            <div className='l-footer__social'>
                <img src={facebook} alt='facebook' />
                <img src={youtube} alt='youtube' />
                <img src={twitter} alt='twitter' />
                <img src={pinterest} alt='pinterest' />
                <img src={instagram} alt='instagram' />
            </div>

            <ul className='l-footer__nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/stories'>Stories</Link></li>
                <li><Link to='/features'>Features</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
            </ul>

            <div className='l-footer__call-action'>
                <BtnArrow text='Get an invite' color='white'/>
                <p className='l-footer__copy'>Copyright 2019. All Rights Reserved</p>
            </div>

        </footer>
    )
}

export default Footer
