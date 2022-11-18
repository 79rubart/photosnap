import React from 'react'
import MainCard from '../../components/MainCard'
import desktop from '../../assets/img/features/desktop/hero.jpg'
import tablet from '../../assets/img/features/tablet/hero.jpg'
import mobile from '../../assets/img/features/mobile/hero.jpg'
import FeaturesSection from '../../components/FeaturesSection'

const Features = () => {
    return (
        <>
            <header>
                <MainCard background="black" textPosition=""
                    title="Features"
                    text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
                    desktop={desktop} tablet={tablet} mobile={mobile}
                />
            </header>
            <main>
                <FeaturesSection featPage={true} />
            </main>
        </>
    )
}

export default Features
