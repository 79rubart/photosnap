import checkIcon from "../../assets/img/pricing/desktop/check.svg"
import "./BenefitsRow.css"

const BenefitsRow = (props) => {

    function showCheck(check){
        if (check){
            return (
                <img src={checkIcon} alt="Check Icon" />
            )
        }
    }

    return (
        <div className="c-benefits-row-box">
            <div className="c-benefits-row">
                <div className="c-benefits__row-text">
                    <span>{props.text}</span>
                </div>
                <div className="c-benefits__row-checks">
                    <div className="c-benefits--plan">
                        <span className="c-benefits--show-title">{props.basic === true ? "Basic" : "" }</span>
                        <span>{showCheck(props.basicCheck)}</span>
                    </div>
                    <div className="c-benefits--plan">                
                        <span className="c-benefits--show-title-pro">{props.pro === true ? "Pro" : "" }</span>
                        <span className="c-benefits--show-title-pro-check">{showCheck(props.proCheck)}</span>
                    </div>
                    <div className="c-benefits--plan">
                        <span className="c-benefits--show-title">{props.business === true ? "Business" : "" }</span>
                        <span>{showCheck(props.businessCheck)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsRow