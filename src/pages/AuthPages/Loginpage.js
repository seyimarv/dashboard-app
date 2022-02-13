import React from "react";
import AuthFormTemplate from "../../components/AuthFormTemplate/AuthFormTemplate";
import "./auth.scss";
import AppleIcon from "../../images/AppleIcon.svg";
import GoogleIcon from "../../images/GoogleIcon.svg";
import FormInput from "../../components/Forminput/Forminput";
import CustomButton from "../../components/custom-button/CustomButton";
const LoginForm = () => {
  return (
    <div className="auth-form">
      <h1 className="auth-form__title">Sign in</h1>
      <h2 className="auth-form__subtitle">Sign in to your account</h2>
      <div className="auth-form__options">
        <p>
          <img alt="GoogleIcon" src={GoogleIcon} />
          Sign in with google
        </p>
        <p>
          {" "}
          <img alt="GoogleIcon" src={AppleIcon} /> Sign in with Apple
        </p>
      </div>
      <div className="auth-form__card">
        <FormInput type="emailaddress" label="Email address" />
        <FormInput type="password" label="Password"/>
        <a href="none" className="auth-form__card-link">Forgot password?</a>
        <CustomButton>Sign in</CustomButton>
      </div>
      <span  className="auth-form__link">Don't have an account? <a href="none">Register here</a>  </span>
    </div>
  );
};
const Loginpage = () => {
  return (
    <AuthFormTemplate>
      <LoginForm />
    </AuthFormTemplate>
  );
};

export default Loginpage;
