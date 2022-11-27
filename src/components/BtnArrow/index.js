import React from 'react'
import './BtnArrow.css'

const BtnArrow = (props) => {
    return (
        <button className={props.color === 'white' ? 
        props.space==true ? 'c-btn__arrow c-btn__arrow--space c-btn__arrow--colorWhite' : 'c-btn__arrow c-btn__arrow--colorWhite'
        : 'c-btn__arrow'} >
            {props.text}
            <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7H41.864" stroke={props.color} />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke={props.color} />
            </svg>
        </button>
    )
}

export default BtnArrow
