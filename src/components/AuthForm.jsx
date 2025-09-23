import { useState } from "react";
import GoogleIcon from "../assets/Icons/Google.svg";
import FacebookIcon from "../assets/Icons/Facebook.svg";
import EyeIcon from "../assets/Icons/Eye.svg";
import EyeOffIcon from "../assets/Icons/EyeOff.svg";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 md:p-0">
      <div className="flex mb-6 border-b">
        <button
          onClick={() => setIsSignIn(true)}
          className={`w-1/2 py-2 text-xl font-semibold ${
            isSignIn
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignIn(false)}
          className={`w-1/2 py-2 text-xl font-semibold ${
            !isSignIn
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
        >
          Join In
        </button>
      </div>

      <div className="px-4 pb-4 md:px-8 md:pb-8 text-black">
        <button className="w-full relative text-center border border-purple-600 rounded-lg py-2 mb-4 hover:bg-purple-50 font-semibold">
          <img
            src={GoogleIcon}
            alt="Google"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          <span>Continue with Google</span>
        </button>
        <button className="w-full relative text-center border border-purple-600 rounded-lg py-2 mb-4 hover:bg-purple-50 font-semibold">
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          <span>Continue with Facebook</span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or connect with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form className="text-black">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 mb-4 text-black "
          />
          <div className="relative mb-4">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full border rounded-lg px-4 py-2 pr-10 text-black"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute inset-y-0 right-3 flex items-center"
  >
    {showPassword ? (
        <img src={EyeIcon} alt="Show password" className="w-5 h-5" />
    ) : (
        <img src={EyeOffIcon} alt="Hide password" className="w-5 h-5" />
    )}
  </button>
</div>

          <div className="flex justify-between items-center text-sm mb-6">
            {isSignIn ? (
              <>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 bg-white h-4 w-4 rounded text-purple-600 focus:ring-purple-50 "
                  />
                  Remember me
                </label>
                <a href="#" className="text-gray-500 hover:text-purple-600">
                  Forgot password?
                </a>
              </>
            ) : (
              <span className="text-gray-500">Password strength</span>
            )}
          </div>

          <button className="w-full bg-purple-600 text-white rounded-lg py-2 font-semibold hover:bg-purple-700">
            {isSignIn ? "Continue" : "Agree and Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
