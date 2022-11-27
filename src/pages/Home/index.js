import MainCard from "../../components/MainCard";
import FeaturesSection from '../../components/FeaturesSection'
import image1_desktop from '../../assets/img/home/desktop/create-and-share.jpg'
import image1_tablet from '../../assets/img/home/tablet/create-and-share.jpg'
import image1_mobile from '../../assets/img/home/mobile/create-and-share.jpg'
import image2_desktop from '../../assets/img/home/desktop/beautiful-stories.jpg'
import image2_tablet from '../../assets/img/home/tablet/beautiful-stories.jpg'
import image2_mobile from '../../assets/img/home/mobile/beautiful-stories.jpg'
import image3_desktop from '../../assets/img/home/desktop/designed-for-everyone.jpg'
import image3_tablet from '../../assets/img/home/tablet/designed-for-everyone.jpg'
import image3_mobile from '../../assets/img/home/mobile/designed-for-everyone.jpg'

const Home = () => {
    return (
        <>
            <header>
                <MainCard background="black" textPosition=""
                    title="Create and share your photo stories."
                    text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                    desktop={image1_desktop} tablet={image1_tablet} mobile={image1_mobile} alt='man at snowy place'
                    btnText="Get an invite"
                />
            </header>

            <main>
                <MainCard background="white" textPosition="right"
                    title="Beautiful stories every time"
                    text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
                    desktop={image2_desktop} tablet={image2_tablet} mobile={image2_mobile} alt='laptop on the desk'
                    btnText="View the stories"
                />

                <MainCard background="white" textPosition=""
                    title="Designed for everyone"
                    text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
                    desktop={image3_desktop} tablet={image3_tablet} mobile={image3_mobile} alt='photographer'
                    btnText="View the stories"
                />

                <FeaturesSection />

            </main>
        </>
    )
}

export default Home
