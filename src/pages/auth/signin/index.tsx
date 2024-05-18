import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

function SignIn() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h3>Sign in to Chronia</h3>
      {/* <button onClick={() => signIn("twitter")} className="signin-button">
        <FaXTwitter /> Continue with Twitter
      </button> */}
      <button onClick={() => signIn("google")} className="signin-button">
        <FcGoogle /> Continue with Google
      </button>
    </div>
  );
}

export default SignIn;
