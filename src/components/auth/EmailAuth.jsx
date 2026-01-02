const EmailAuth = ({ setStep, setAuthData }) => {
  return (
    <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-borderColor rounded-3xl shadow-2xl p-8 space-y-6">
      <h2 className="text-2xl font-heading text-primary text-center">
        Enter Email Address
      </h2>

      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-3 rounded-xl border border-borderColor outline-none"
      />

      <button
        onClick={() => {
          setAuthData({ method: "email" });
          setStep("otp");
        }}
        className="w-full py-3 rounded-xl bg-primary text-white"
      >
        Send OTP
      </button>

      <button
        onClick={() => setStep("methods")}
        className="text-sm text-textMuted text-center w-full"
      >
        ← Back
      </button>
    </div>
  );
};

export default EmailAuth;
