import React from "react";
import './AuthFormTemplate.scss'

const AuthFormTemplate = (props) => {
  return (
    <div className="form-template">
      <div className="form-template__left-grid">
         Dash.
      </div>
      <div className="form-template__right-grid">
       {props.children}
      </div>
    </div>

  );
};

export default AuthFormTemplate;
