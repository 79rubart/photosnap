import BenefitsRow from "../BenefitsRow"
import "./BenefitsTable.css"

const BenefitsTable = (props) => {

    return (
        <section className="c-benefits-table-section">
            <div className="c-benefits-table">
                <div className="c-benefits__table-text">
                    <span>Compare</span>
                </div>
                <div className="c-benefits__table-titles">
                    <div className="c-benefits__features">
                        <span>The Features</span>
                    </div>
                    <div className="c-benefits__table-plans">
                        <span>Basic</span>
                        <span className="c-benefits__table-pro">Pro</span>
                        <span>Business</span>
                    </div>
                </div>
            </div>
            <div className="c-benefits-table-rows">
                <BenefitsRow
                text="Unlimited Story Posting"
                basicCheck={true}
                proCheck={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Unlimited Photo Uploading"
                basicCheck={true}
                proCheck={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Embedding Custom Content"
                basicCheck={false}
                proCheck={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Customize Metadata"
                basicCheck={false}
                proCheck={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Advanced Metrics"
                basicCheck={false}
                proCheck={false}
                businessCheck={true}
                />
                <BenefitsRow
                text="Photo Downloads"
                basicCheck={false}
                proCheck={false}
                businessCheck={true}
                />
                <BenefitsRow
                text="Search Engine Indexing"
                basicCheck={false}
                proCheck={false}
                businessCheck={true}
                />
                <BenefitsRow
                text="Custom Analytics"
                basicCheck={false}
                proCheck={false}
                businessCheck={true}
                />
            </div>
        </section>
    )
}

export default BenefitsTable