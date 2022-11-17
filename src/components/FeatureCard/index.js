import "./FeatureCard.css"

const FeatureCard = (props) => {
    return (
        <div className="card">
            <img src={props.icon} alt={props.alt}/>
            <p>{props.title}</p>
            <span>{props.description}</span>
        </div>
    )
}

export default FeatureCard