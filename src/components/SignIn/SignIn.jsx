import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { auth, provider } from "../../config/firebase";
import { Context } from "../../context/Context";

const SignIn = () => {
  const { user, setuser } = useContext(Context);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setuser(result.user);
      })
      .catch((error) => {
        console.error("Error signing in with popup", error);
      });
  };
  return (
    <div className="h-screen w-full overflow-hidden bg-[#131314] flex flex-col justify-between">
      <nav className="flex items-center justify-between py-4 sm:pl-4 sm:pr-8 px-4">
        <h1 className="text-xl text-zinc-300 font-[Bold]">Gemini</h1>
        <button
          onClick={signIn}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-[#B3D7EF] rounded-full text-xs sm:text-sm hover:bg-[#9dcae8] duration-300"
        >
          Sign In
        </button>
      </nav>
      <div className="h-[50%] w-full sm:pl-[190px] px-3">
        <h1 className="hello text-[100px] sm:text-[120px] font-[Bold] leading-tight tracking-tight">
          <span>Gemini</span>
        </h1>
        <p className="text-[#E3E3E3] text-xl sm:text-3xl tracking-tighter font-semibold w-[250px] sm:w-[360px] ml-2 -mt-4">
          Supercharge your creativity and productivity
        </p>
        <p className="text-[#E3E3E3] text-sm sm:text-lg tracking-tight sm:w-[360px] ml-2 my-5">
          Chat to start writing, planning, learning and more with Google AI
        </p>
        <button
          onClick={signIn}
          className="px-7 py-3 bg-[#74b6e2] rounded-full hover:bg-[#9dcae8] duration-300 ml-2"
        >
          Sign In
        </button>
      </div>
      <footer className="w-full py-6 px-8 bg-[#202124] flex items-center">
        <h1 className="text-xl text-zinc-300 font-[Bold]">Google</h1>
        <h3 className="text-sm text-zinc-300 ml-5">Privacy and Terms</h3>
      </footer>
    </div>
  );
};

export default SignIn;
