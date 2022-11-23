import "./GalleryCard.css"
import BtnArrow from "../BtnArrow"

const GalleryCard = (props) => {
    return(
        <div className="c-gallery-card" key={props.key}>
            <img src={props.src} alt={props.alt} className="c-gallery-card--image" />
            <div className="c-gallery-card--description">
                <div className="c-gallery-card--info">
                    <p className="c-gallery-card--date">{props.date}</p>
                    <span className="c-gallery-card--title">{props.title}</span>
                    <p className="c-gallery-card--author">{props.author}</p>
                </div>
                <div className="c-gallery-card--button">
                    <BtnArrow color="white"
                    text="Read More"/>
                </div>
            </div>
        </div> 
    )

}

export default GalleryCard