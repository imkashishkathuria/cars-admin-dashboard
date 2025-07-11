// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const LoginModal = ({ onClose, onUpdate }) => {
//   const [signin, setSignIn] = useState("Login");

//   const isSignup = signin === "Sign up";

//   const toggleForm = () => {
//     setSignIn(signin === "Login" ? "Sign up" : "Login");
//   };


//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSubmitted, setisSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//           name: fullName || '',
//           email: email || '',
//           password: password || '',
//       });
//       const handleChange = (e) => {
//         setFormData((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value,
//         }));
//     };
//   const onSubmitHandler = (e) =>{
//     e.preventDefault();
    
//     if(signin == "Sign up" && !isSubmitted){
//       setisSubmitted(true);
//       onUpdate(formData)
      
//     }
//     onClose();      
//   }


//   const backdrop = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   const modal = {
//     hidden: { opacity: 0, scale: 0.8, y: "10", x: "10" },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: "10",
//       x: "10",
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//     exit: { opacity: 0, scale: 0.8, y: "-50%", x: "-50%" },
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center backdrop-blur-[2px] transition-opacity duration-300"
//         variants={backdrop}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
//         <motion.div
//           className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm"
//           variants={modal}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <div className="relative flex flex-col bg-white">
//             <div className="flex justify-end px-3">
//               <button
//                 onClick={onClose}
//                 tabIndex={0}
//                 className="text-black font-bold text-xl px-4 py-2 rounded transition cursor-pointer"
//               >
//                 X
//               </button>
//             </div>
//             <div className="relative m-2.5 items-center flex justify-center text-white h-24 rounded-md bg-slate-800">
//               <h3 className="text-2xl">{signin}</h3>
//             </div>

//             <div className="flex flex-col gap-4 p-6">
//               {isSignup && (
//                 <div className="w-full max-w-sm min-w-[200px]">
//                   <label className="block mb-2 text-sm text-slate-600">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                     placeholder="Your Name"
//                     onChange={(e)=>handleChange} 
//                     value={fullName}
//                   />
//                 </div>
//               )}

//               <div className="w-full max-w-sm min-w-[200px]">
//                 <label className="block mb-2 text-sm text-slate-600">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                   placeholder="Your Email"
//                   onChange={(e)=>shandleChange} value={email}
//                 />
//               </div>

//               <div className="w-full max-w-sm min-w-[200px]">
//                 <label className="block mb-2 text-sm text-slate-600">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                   placeholder="Your Password"
//                   onChange={(e)=>handleChange} value={password}
//                 />
//               </div>

//               <div className="inline-flex items-center mt-2">
//                 <label
//                   className="flex items-center cursor-pointer relative"
//                   htmlFor="check-2"
//                 >
//                   <input
//                     type="checkbox"
//                     className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
//                     id="check-2"
//                   />
//                   <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-3.5 w-3.5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       stroke="currentColor"
//                       strokeWidth="1"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </span>
//                 </label>
//                 <label
//                   className="cursor-pointer ml-2 text-slate-600 text-sm"
//                   htmlFor="check-2"
//                 >
//                   Remember Me
//                 </label>
//               </div>
//             </div>

//             <div className="p-6 pt-0">
//               <button
//                 className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//                 onClick={onSubmitHandler 
//                     }
//               >
//                 {signin}
//               </button>
//               <p className="flex justify-center mt-6 text-sm text-slate-600">
//                 {isSignup ? "Already have an account?" : "Don't have an account?"}
//                 <button
//                   className="ml-1 text-sm font-semibold text-slate-700 underline"
//                   onClick={toggleForm}
//                 >
//                   {isSignup ? "Login" : "Sign up"}
//                 </button>
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default LoginModal;


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoginModal = ({ onClose, onUpdate }) => {
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
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formData.name || formData.email) {
      onUpdate(formData); // pass back to parent (Sidebar)
    }
    onClose(); // close modal
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
