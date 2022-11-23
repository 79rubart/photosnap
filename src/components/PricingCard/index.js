import "./PricingCard.css"
import BtnDefault from "../BtnDefault"

const PricingCard = (props) => {
    return (
        <div className={props.cardSize === 'big' ?
        props.bgColor === 'black' ? 'c-pricing__card c-pricing__card--big c-pricing__card--bgBlack' : 'c-pricing__card c-pricing__card--big c-pricing__card--bgLightGrey' : 
        props.bgColor === 'black' ? 'c-pricing__card c-pricing__card--small c-pricing__card--bgBlack' : 'c-pricing__card c-pricing__card--small c-pricing__card--bgLightGrey'}>
            <div className="c-pricing__card-div01">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="c-pricing__card-div02">
                <span>{props.price}</span>
                <p>{props.time}</p>
            </div>
            <BtnDefault width="big" bgColor={props.bgColor === 'black' ? 'white' : 'black'} text="PICK A PLAN"/>
        </div>
    )
}

export default PricingCard