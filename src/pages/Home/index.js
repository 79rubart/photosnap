import MainCard from "../../components/MainCard";
import image1 from '../../assets/img/home/desktop/create-and-share.jpg'
import image2 from '../../assets/img/home/desktop/beautiful-stories.jpg'
import image3 from '../../assets/img/home/desktop/designed-for-everyone.jpg'

const Home = () => {
    return (
        <>
            <MainCard background="black" textPosition=""
                title="Create and share your photo stories."
                text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                img={image1} alt='man at snowy place'
                btnText="Get an invite"
            />

            <MainCard background="white" textPosition="right"
                title="Beautiful stories every time"
                text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
                img={image2} alt='laptop on the desk'
                btnText="View the stories"
            />

            <MainCard background="white" textPosition=""
                title="Designed for everyone"
                text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
                img={image3} alt='photographer'
                btnText="View the stories"
            />
        </>
    )
}

export default Home
