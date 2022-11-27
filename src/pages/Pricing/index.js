import MainCard from "../../components/MainCard/index"
import Subscription from "../../components/Subscription/index"
import BenefitsTable from "../../components/BenefitsTable/index"
import desktop from "../../assets/img/pricing/desktop/hero.jpg"
import tablet from "../../assets/img/pricing/tablet/hero.jpg"
import mobile from "../../assets/img/pricing/mobile/hero.jpg"
import FooterTop from "../../components/FooterTop"

const Pricing = () => {
    return (
        <>
            <header>
                <MainCard background="black" textPosition=""
                    title="Pricing"
                    text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
                    desktop={desktop} tablet={tablet} mobile={mobile}
                />
            </header>
            <main>
                <Subscription />
                <BenefitsTable />
                <FooterTop />
            </main>
        </>
    )
}

export default Pricing