import React from "react";
import AuthFormTemplate from "../../components/AuthFormTemplate/AuthFormTemplate";
import "./auth.scss";
import AppleIcon from "../../images/AppleIcon.svg";
import GoogleIcon from "../../images/GoogleIcon.svg";
import FormInput from "../../components/Forminput/Forminput";
import CustomButton from "../../components/custom-button/CustomButton";
const SignupForm = () => {
    return (
        <div className="auth-form">
            <h1 className="auth-form__title">Create an account</h1>
            <h2 className="auth-form__subtitle">Create an account to use dashboard</h2>
            <div className="auth-form__options">
                <p>
                    <img alt="GoogleIcon" src={GoogleIcon} />
                    Sign up with google
                </p>
                <p>
                    {" "}
                    <img alt="GoogleIcon" src={AppleIcon} /> Sign up with Apple
                </p>
            </div>
            <div className="auth-form__card">
                <div style={{display: 'flex'}}>
                    <FormInput type="text" label="First name" />
                    <FormInput style={{marginLeft: '1rem'}}  type="text" label="Last name" />
                </div>
                <FormInput type="emailaddress" label="Email address" />
                <FormInput type="password" label="Password" />
                <FormInput type="password" label="Confirm Password" />
                <a href="none" className="auth-form__card-link">Forgot password?</a>
                <CustomButton>Sign in</CustomButton>
            </div>
            <span className="auth-form__link">Already have an account? <a href="none">Login here</a>  </span>
        </div>
    );
};
const Signuppage = () => {
    return (
        <AuthFormTemplate>
            <SignupForm />
        </AuthFormTemplate>
    );
};

export default Signuppage;
