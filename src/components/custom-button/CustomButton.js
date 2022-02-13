import React from "react";
import './CustomButton.scss'


const CustomButton = ({children}) => {
    return (
         <button className="btn">
            {children}
         </button>
    )
}

export default CustomButton