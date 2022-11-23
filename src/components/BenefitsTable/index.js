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
                basic={true}
                basicCheck={true}
                pro={true}
                proCheck={true}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Unlimited Photo Uploading"
                basic={true}
                basicCheck={true}
                pro={true}
                proCheck={true}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Embedding Custom Content"
                basic={true}
                basicCheck={false}
                pro={true}
                proCheck={true}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Customize Metadata"
                basic={true}
                basicCheck={false}
                pro={true}
                proCheck={true}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Advanced Metrics"
                basic={true}
                basicCheck={false}
                pro={true}
                proCheck={false}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Photo Downloads"
                basic={true}
                basicCheck={false}
                pro={true}
                proCheck={false}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Search Engine Indexing"
                basic={true}
                basicCheck={false}
                pro={true}
                proCheck={false}
                business={true}
                businessCheck={true}
                />
                <BenefitsRow
                text="Custom Analytics"
                basic={true}
                basicCheck={false}
                pro={true}
                proCheck={false}
                business={true}
                businessCheck={true}
                />
            </div>
        </section>
    )
}

export default BenefitsTable