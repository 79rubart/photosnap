import "./FeaturesSection.css"
import FeatureCard from "../FeatureCard";
import embed from "../../assets/img/features/desktop/embed.svg"
import noLimit from "../../assets/img/features/desktop/no-limit.svg"
import responsive from "../../assets/img/features/desktop/responsive.svg"
import domain from "../../assets/img/features/desktop/custom-domain.svg"
import exposure from "../../assets/img/features/desktop/boost-exposure.svg"
import image from "../../assets/img/features/desktop/drag-drop.svg"

const FeaturesSection = (props) => {
    return (
        <section className="l-features">
            <div>
                <FeatureCard
                    icon={responsive}
                    title="100% Responsive"
                    description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
                />
            </div>
            <div className="l-features--middle">
                <FeatureCard
                    icon={noLimit}
                    title="No Photo Upload Limit"
                    description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
                />
            </div>
            <div>
                <FeatureCard
                    icon={embed}
                    title="Available to Embed"
                    description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
                />
            </div>
            <div className={props.featPage === true ? "" : "l-features--hide"}>
                <FeatureCard
                    icon={domain}
                    title="Available to Embed"
                    description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
                />
            </div>
            
            <div className={props.featPage === true ? "" : "l-features--hide"}>
                <FeatureCard
                    icon={exposure}
                    title="Available to Embed"
                    description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
                />
            </div>
            <div className={props.featPage === true ? "" : "l-features--hide"}>
                <FeatureCard
                    icon={image}
                    title="Available to Embed"
                    description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
                />
            </div>
            
        </section>
    )
}

export default FeaturesSection