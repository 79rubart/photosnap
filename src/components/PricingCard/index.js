import "./PricingCard.css"
import BtnDefault from "../BtnDefault"

const PricingCard = (props) => {
    return (
        <div className={props.cardSize === 'big' ?
        props.bgColor === 'black' ? 'c-pricing__card c-pricing__card--big c-pricing__card--bgBlack' : 'c-pricing__card c-pricing__card--big c-pricing__card--bgLightGrey' : 
        props.bgColor === 'black' ? 'c-pricing__card c-pricing__card--small c-pricing__card--bgBlack' : 'c-pricing__card c-pricing__card--small c-pricing__card--bgLightGrey'}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div>
                <span>{props.price}</span>
                <p>{props.time}</p>
            </div>
            <BtnDefault bgColor={props.bgColor === 'black' ? 'white' : 'black'} text="PICK A PLAN"/>
        </div>
    )
}

export default PricingCard