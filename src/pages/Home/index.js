import MainCard from "../../components/MainCard";
import photo from '../../assets/img/home/desktop/create-and-share.jpg'

const Home = () => {
    return (
        <>
            <MainCard background="black" textPosition="right"
                title="Create and share your photo stories."
                text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                img={photo} alt='man at snowy place'
                btnText="Get an invite"
            />
        </>
    )
}

export default Home
