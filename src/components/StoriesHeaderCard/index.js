import React from 'react'
import BtnArrow from '../BtnArrow'
import { useMediaQuery } from 'react-responsive'
import './StoriesHeaderCard.css'

const StoriesHeaderCard = (props) => {
    const path = `/stories/${props.title.toLowerCase().replace(/ /g, '_')}`

    const desktop = useMediaQuery({ minWidth: 1441 })
    const tablet = useMediaQuery({ minWidth: 769, maxWidth: 1440 })
    const mobile = useMediaQuery({ maxWidth: 768 })

    return (
        <header className={props.background === 'black' ? 'c-stories__header__card c-stories__header--bgBlack' : ''}>
            <div className='c-stories__header__text'>
                <span className='c-stories__header__topText'>{props.topText}</span>
                <h1>{props.title}</h1>
                <div className='c-stories__header__dateAuthor'><p>{props.date}</p><span>{props.author}</span></div>
                <p>{props.text}</p>
                {
                    props.btnText ? (
                        <BtnArrow text={props.btnText} color={props.background === 'black' ? 'white' : 'black'} path={path} />
                    ) : ''
                }
            </div>
            {desktop && <img src={props.desktop} alt={props.alt} />}
            {tablet && <img src={props.tablet} alt={props.alt} />}
            {mobile && <img src={props.mobile} alt={props.alt} />}

        </header>
    )
}

export default StoriesHeaderCard
