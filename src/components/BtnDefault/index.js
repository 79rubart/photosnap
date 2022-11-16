import "./BtnDefault.css"

const BtnDefault = (props) => {
    return (
        <>
            <button className={props.bgColor === 'black' ? 'c-btn__default c-btn__default--bgBlack' : 'c-btn__default c-btn__default--bgWhite'}>
                {props.text}
            </button>
        </>
    )
}

export default BtnDefault