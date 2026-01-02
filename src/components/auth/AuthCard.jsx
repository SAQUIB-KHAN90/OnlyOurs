import AuthHeader from "./AuthHeader";
import AuthMethods from "./AuthMethods";

const AuthCard = ({ intent, setStep }) => {
  return (
    <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-borderColor rounded-3xl shadow-2xl p-8 space-y-8">
      <AuthHeader intent={intent} />
      <AuthMethods setStep={setStep} />
    </div>
  );
};

export default AuthCard;
