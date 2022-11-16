import PricingCard from "../PricingCard"
import "./PricingCardsGroup.css"

const PricingCardsGroup = () => {
    return (
        <div className="pricing-cards-group">
            <PricingCard bgColor="" cardSize=""
            title="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price="$19.00"
            time="per month"
            />

            <PricingCard bgColor="black" cardSize="big"
            title="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price="$39.00"
            time="per month"
            />

            <PricingCard bgColor="" cardSize=""
            title="Business"
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            price="$99.00"
            time="per month"
            />
        </div>
    )
}

export default PricingCardsGroup