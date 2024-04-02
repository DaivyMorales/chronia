import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h3>Sign in to Chronia</h3>
      <button className="signin-button">
        <FaXTwitter /> Sign in with Twitter
      </button>
      <button className="signin-button">
        <FcGoogle /> Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
