const AuthMethods = ({ setStep }) => {
  return (
    <div className="space-y-4">
      <button className="w-full py-3 rounded-xl border border-borderColor hover:bg-secondary/20 transition">
        Continue with Google
      </button>

      <button
        onClick={() => setStep("mobile")}
        className="w-full py-3 rounded-xl border border-borderColor hover:bg-secondary/20 transition"
      >
        Continue with Mobile Number
      </button>

      <button
        onClick={() => setStep("email")}
        className="w-full py-3 rounded-xl border border-borderColor hover:bg-secondary/20 transition"
      >
        Continue with Email
      </button>
    </div>
  );
};

export default AuthMethods;
