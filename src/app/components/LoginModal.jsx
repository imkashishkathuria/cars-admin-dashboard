

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const LoginModal = ({ onClose, onUpdate }) => {
  const {user, setUser, login, logout } = useUser();
  const router = useRouter();

  const [signin, setSignIn] = useState("Login");
  const isSignup = signin === "Sign up";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setSignIn(signin === "Login" ? "Sign up" : "Login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // setUser(name, value);
    // login(name, value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (formData.name || formData.email) {
      login(formData);
      router.push("/dashboard");
      toast.success("Logged in successfully!")
      onUpdate(formData); 
    // }
    onClose();
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center backdrop-blur-[2px]"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden bg-white"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex justify-end px-3 py-2">
            <button onClick={onClose} className="text-black text-xl">X</button>
          </div>
          <div className="bg-slate-800 text-white text-center py-4">
            <h3 className="text-2xl">{signin}</h3>
          </div>
          <form onSubmit={onSubmitHandler} className="p-6 flex flex-col gap-4">
            {isSignup && (
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                required
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your Password"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-slate-800 text-white py-2 px-4 rounded mt-2"
            >
              {signin}
            </button>

            <p className="text-sm text-center text-slate-600 mt-4">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={toggleForm}
                className="ml-1 underline text-slate-800 font-semibold"
              >
                {isSignup ? "Login" : "Sign up"}
              </button>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
