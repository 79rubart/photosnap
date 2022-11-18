import "./FeatureCard.css"

const FeatureCard = (props) => {
    return (
        <div className={!props.hide ? "c-feature-card__card c-feature-card__card--hide" : "c-feature-card__card"}>
            <img src={props.icon} alt={props.alt} />
            <div className="c-feature-card__text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default FeatureCard