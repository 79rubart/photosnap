import { useState } from "react"
import PricingCard from "../PricingCard"
import "./Subscription.css"

const Subscription = () => {
    const [isActive, setIsActive] = useState(false);

    return (  
        <section className="c-pricing__container">
        <div className="c-pricing__switch">
        <span className={!isActive ? "c-pricing__time" : "c-pricing__time c-pricing__time--active"}>Monthly</span>
            <label className="switch">
                <input type="checkbox" onClick={() => {setIsActive(!isActive)}}/>
                <span className="slider round"></span>
            </label>
            <span className={isActive ? "c-pricing__time" : "c-pricing__time c-pricing__time--active" }>Yearly</span>
        </div>

            <div className="pricing-cards-group">
                <PricingCard bgColor="" cardSize=""
                    title="Basic"
                    description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
                    price={!isActive ? "$19.00" : "$190.00"}
                    time={!isActive ? "per month" : "per year"}
                />

                <PricingCard bgColor="black" cardSize="big"
                    title="Pro"
                    description="More advanced features available. Recommended for photography veterans and professionals."
                    price={!isActive ? "$39.00" : "$390.00"}
                    time={!isActive ? "per month" : "per year"}
                />

                <PricingCard bgColor="" cardSize=""
                    title="Business"
                    description="Additional features available such as more detailed metrics. Recommended for business owners."
                    price={!isActive ? "$99.00" : "$990.00"}
                    time={!isActive ? "per month" : "per year"}
                />
            </div>
        </section>
    )
}

export default Subscription