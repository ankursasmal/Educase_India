import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  const handleSignupClick = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      navigate("/signup");
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#F7F8F9] flex flex-col justify-between min-h-[80vh] py-10 px-5 gap-5 w-[375px] rounded-se-xl"
    >
      <div></div>
      <div className="flex flex-col">    
           <div className="mt-[51vh]">
        <h1 className="font-semibold text-[26px]">Welcome to PopX</h1>
        <h2 className="opacity-60 text-gray-600 text-[18px] max-w-[35vw]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </h2>
      </div>
      <div className="flex flex-col mt-[2vw] gap-3 font-[400]">
        <button
          onClick={handleSignupClick}
          className="bg-[#6C25FF] h-[46px] py-3 text-white rounded-md transition-opacity duration-300 ease-out"
        >
          Create Account
        </button>
        <button
          onClick={handleLoginClick}
          className="bg-[#CEBAFC] h-[46px] py-3 text-black rounded-md transition-opacity duration-300 ease-out"
        >
          Already Registered? Login
        </button>
      </div>
      </div>

    </motion.div>
  );
};

export default Home;
