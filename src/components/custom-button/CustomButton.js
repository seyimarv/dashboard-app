import React from "react";
import './CustomButton.scss'


const CustomButton = (props) => {
    return (
         <button {...props} className={`btn ${props.filterbutton ? 'btn-filter' : ''}`}>
            {props.children}
         </button>
    )
}

export default CustomButton