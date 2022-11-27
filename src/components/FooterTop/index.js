import React from 'react'
import BtnArrow from '../BtnArrow'
import './FooterTop.css'

const FooterTop = () => {
    return (
        <div className='l-footer-top'>
            <div className='l-footer-top__text'>
                <h2>We're in beta. Get your invite today!</h2>
            </div>
                <BtnArrow text='Get an invite' color='white' />
        </div>
    )
}

export default FooterTop
