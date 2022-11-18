import React from 'react'
import BtnArrow from '../BtnArrow'
import './MainCard.css'
import { useMediaQuery } from 'react-responsive'

const MainCard = (props) => {

  const desktop = useMediaQuery({minWidth: 1441})
  const tablet = useMediaQuery({minWidth: 769, maxWidth: 1440})
  const mobile = useMediaQuery({maxWidth: 768})
    
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
      {desktop && <img src={props.desktop} alt={props.alt} />}
      {tablet && <img src={props.tablet} alt={props.alt} />}
      {mobile && <img src={props.mobile} alt={props.alt} />}
      
    </section>
  )
}

export default MainCard
