import { useLocation } from "react-router-dom";
import { useState } from "react";
import AuthCard from "../components/auth/AuthCard";
import MobileAuth from "../components/auth/MobileAuth";
import EmailAuth from "../components/auth/EmailAuth";
import OtpVerify from "../components/auth/OtpVerify";

const Auth = () => {
  const location = useLocation();
  const intent = location.state?.intent || "login";

  const [step, setStep] = useState("methods"); // methods | mobile | email | otp
  const [authData, setAuthData] = useState({});

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      {step === "methods" && (
        <AuthCard intent={intent} setStep={setStep} />
      )}

      {step === "mobile" && (
        <MobileAuth setStep={setStep} setAuthData={setAuthData} />
      )}

      {step === "email" && (
        <EmailAuth setStep={setStep} setAuthData={setAuthData} />
      )}

      {step === "otp" && (
        <OtpVerify authData={authData} />
      )}
    </main>
  );
};

export default Auth;
