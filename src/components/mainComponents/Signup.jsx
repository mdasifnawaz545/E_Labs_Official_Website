// import { useState } from "react";
// import { SiGithub } from "react-icons/si";
// import { FcGoogle } from "react-icons/fc";
// import { ImProfile } from "react-icons/im";
// import {
//   fbhandleGithubSignIn,
//   fbhandleGoogleSignIn,
// } from "../subComponents/firebase";
// import { motion } from "framer-motion";
// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false); // New state for Google loading
//   const [githubLoading, setGithubLoading] = useState(false); // New state for GitHub loading
//   const [error, setError] = useState(null);

//   const signInVariants = {
//     initial: {
//       x: "-100vw",
//     },
//     final: {
//       x: 0,
//       transition: {
//         when: "beforeChildren",
//       },
//     },
//   };

//   const childButtonVaraints = {
//     initial: {
//       x: "100vw",
//     },
//     final: {
//       x: 0,
//     },
//   };

//   const handleChange = (e) => {
//     const value = e.target.value;
//     // Allow only numbers and restrict length to 10
//     if (/^\d{0,10}$/.test(value)) {
//       setPhoneNumber(value);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Simulate form submission
//     setTimeout(() => {
//       setLoading(false);
//       if (password === confirmPassword) {
//         setError(null);
//       } else {
//         setError("Passwords do not match");
//         // Clear error after 2 seconds
//         setTimeout(() => {
//           setError(null);
//         }, 2000);
//       }
//       // console.log("Email:", email);
//       // console.log("Password:", password);
//     }, 1000);
//   };

//   const handleGoogleSignIn = async () => {
//     setGoogleLoading(true);
//     try {
//       await fbhandleGoogleSignIn({ setGoogleLoading, setError });
//       // console.log("Signed in with Google");
//       // Handle successful sign-in (redirect or update UI)
//     } catch (error) {
//       // console.error("Google sign-in failed:", error);
//       setError("Google Sign-In failed. Please try again.");
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   const handleGitHubSignIn = async () => {
//     setGithubLoading(true);
//     try {
//       await fbhandleGithubSignIn({ setGithubLoading, setError });
//       // console.log("Signed in with GitHub");
//       // Handle successful sign-in (redirect or update UI)
//     } catch (error) {
//       // console.error("GitHub sign-in failed:", error);
//       setError("GitHub Sign-In failed. Please try again.");
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       variants={signInVariants}
//       initial="initial"
//       animate="final"
//       className="flex flex-col items-center justify-start"
//     >
//       <div className="flex scale-75 flex-wrap items-start justify-evenly min-h-screen pt-4 gap-8 dark:bg-blue-100 dark:bg-lightBG">
//         <div className="flex flex-col md:flex-row bg-gradient-to-b from-bgColor to-[#301F0A] dark:from-white dark:to-orange-100 w-[90%] mb-16 border-textColor1 border-[5px] rounded-3xl overflow-auto dark:bg-white">
//           <div className="flex flex-col sm:w-1/2 justify-start p-8 text-textColor1">
//             <p className="md:text-3xl text-xl font-bold mb-8 flex gap-4 items-center">
//               SIGN UP
//               <ImProfile />
//             </p>
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-4 justify-center text-center text-lg md:text-xl"
//             >
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="flex justify-center items-center py-2 px-2 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-md w-full leading-tight focus:outline-none focus:shadow-outline text-textColor1 placeholder-textColor1 focus:scale-105"
//                 placeholder="Enter your E-mail"
//                 aria-label="Enter your E-mail"
//                 required
//               />
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={handleChange}
//                 className="flex justify-center items-center py-2 px-2 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-md w-full leading-tight focus:outline-none focus:shadow-outline text-textColor1 placeholder-textColor1 focus:scale-105"
//                 placeholder="Enter Phone Number"
//                 aria-label="Enter Phone Number"
//                 required
//                 maxLength="10"
//               />
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="flex justify-center items-center py-2 px-2 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-md w-full leading-tight focus:outline-none focus:shadow-outline text-textColor1 placeholder-textColor1 focus:scale-105"
//                 placeholder="Enter Password"
//                 aria-label="Enter Password"
//                 required
//               />
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="flex justify-center items-center py-2 px-2 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-md w-full leading-tight focus:outline-none focus:shadow-outline text-textColor1 placeholder-textColor1 focus:scale-105"
//                 placeholder="Confirm Password"
//                 aria-label="Confirm Password"
//                 required
//               />
//               <button
//                 className="border-2 mt-2 font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 focus:scale-105 focus:outline-none"
//                 id="submit"
//                 type="submit"
//               >
//                 {loading ? "Signing up..." : "SIGN UP"}
//               </button>
//               <div className="h-6 md:h-4">
//                 {error && <p className="text-red-500">{error}</p>}
//               </div>
//               <div className="flex justify-center items-center px-4">
//                 <hr className="w-1/2 h-px bg-textColor2 dark:bg-gray-600 border-0 rounded" />
//                 <span className="mx-2 text-textColor2 dark:text-gray-600">
//                   or
//                 </span>
//                 <hr className="w-1/2 h-px bg-textColor2 dark:bg-gray-600 border-0 rounded" />
//               </div>
//               <button
//                 className="border-2 mt-2 font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 focus:scale-105 focus:outline-none"
//                 onClick={handleGoogleSignIn}
//                 type="button" // Prevents form submission
//               >
//                 <p className="text-center flex justify-center items-center gap-3">
//                   <FcGoogle />
//                   {googleLoading ? "Signing in..." : "Sign In with Google"}
//                 </p>
//               </button>
//               <button
//                 className="border-2 mt-2 font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 focus:scale-105 focus:outline-none"
//                 onClick={handleGitHubSignIn}
//                 type="button" // Prevents form submission
//               >
//                 <p className="text-center flex justify-center items-center gap-3">
//                   <SiGithub />
//                   {githubLoading ? "Signing in..." : "Sign In with GitHub"}
//                 </p>
//               </button>
//             </form>
//           </div>
//           <div className="flex flex-col gap-4 justify-center items-center text-center sm:w-1/2 p-10 bg-textColor1">
//             <h1 className="md:text-4xl text-2xl font-extrabold mb-8">
//               ALREADY HAVE AN ACCOUNT?
//             </h1>
//             <motion.a
//               variants={childButtonVaraints}
//               href="/login"
//               className="flex justify-center bg-black text-textColor1 px-5 py-4 w-3/4 rounded-md border-2-textColor1 text-lg md:text-2xl font-extrabold hover:scale-105 hover:shadow-sm focus:scale-105 focus:outline-none"
//             >
//               LOG IN
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Signup;
