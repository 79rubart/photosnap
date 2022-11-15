import React from 'react'
import BtnArrow from '../BtnArrow'
import './MainCard.css'

const MainCard = (props) => {
    
    return (
    <section className={props.textPosition === 'right' ? 
    props.background === 'black' ? 'c-main-card c-main-card--right c-main-card--bgBlack' : 'c-main-card c-main-card--right c-main-card__bgWhite' :
    props.background === 'black' ? 'c-main-card c-main-card--bgBlack' : 'c-main-card c-main-card--bgWhite'
  }>
      <div className='c-main-card__text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {
          props.btnText ? (
            <BtnArrow text={props.btnText} color={props.background === 'black' ? 'white' : 'black' } />
          ) : ''
        }
      </div>
      <img src={props.img} alt={props.alt} />
    </section>
  )
}

export default MainCard
