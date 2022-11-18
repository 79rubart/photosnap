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

            <FeatureCard
                hide={true}
                icon={responsive}
                title="100% Responsive"
                description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            />


            <FeatureCard
                hide={true}
                icon={noLimit}
                title="No Photo Upload Limit"
                description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            />


            <FeatureCard
                hide={true}
                icon={embed}
                title="Available to Embed"
                description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
            />


            <FeatureCard
                hide={props.featPage}
                icon={domain}
                title="Custom Domain"
                description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            />



            <FeatureCard
                hide={props.featPage}
                icon={exposure}
                title="Boost Your Exposure"
                description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            />


            <FeatureCard
                hide={props.featPage}
                icon={image}
                title="Drag & Drop Image"
                description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            />


        </section>
    )
}

export default FeaturesSection