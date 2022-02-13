import React from "react";
import './Forminput.scss'

const FormInput = (props) => {
    const {label} = props
    return (
        <div className="input-group">
          <span className='label'>{label}</span>
          <input className='input' {...props}/>
        </div>
    )
}


export default FormInput