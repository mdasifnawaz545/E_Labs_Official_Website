// import { useState } from "react";
// import { SiGithub } from "react-icons/si";
// import { FcGoogle } from "react-icons/fc";
// import { CgProfile } from "react-icons/cg";
// import {
//   fbhandleGithubSignIn,
//   fbhandleGoogleSignIn,
// } from "../subComponents/firebase";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { motion } from "framer-motion";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [githubLoading, setGithubLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Initialize navigate

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Simulate form submission
//     setTimeout(() => {
//       setLoading(false);
//       if (email !== "test" || password !== "password") {
//         setError("Invalid username or password");
//         setTimeout(() => {
//           setError(null);
//         }, 2000);
//       } else {
//         // console.log("Email:", email);
//         // console.log("Password:", password);
//         navigate("/"); // Redirect to home on successful login
//       }
//     }, 1000);
//   };

//   const handleGoogleSignIn = async () => {
//     setGoogleLoading(true);
//     try {
//       await fbhandleGoogleSignIn({ setGoogleLoading, setError });
//       // console.log("Signed in with Google");
//     } catch (error) {
//       // console.error("Google sign-in failed:", error);
//       setError("Google Sign-In failed. Please try again.");
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   const logInVariant = {
//     initial: {
//       x: "100vw",
//     },
//     final: {
//       x: 0,
//       transition: {
//         when: "beforeChildren",
//       },
//     },
//   };

//   const childVarient = {
//     initial: {
//       x: "-100vw",
//     },
//     final: {
//       x: 0,
//     },
//   };

//   const handleGitHubSignIn = async () => {
//     setGithubLoading(true);
//     try {
//       await fbhandleGithubSignIn({ setGithubLoading, setError });
//       // console.log("Signed in with GitHub");
//     } catch (error) {
//       // console.error("GitHub sign-in failed:", error);
//       setError("GitHub Sign-In failed. Please try again.");
//     } finally {
//       setGithubLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       variants={logInVariant}
//       initial="initial"
//       animate="final"
//       className="flex flex-col items-center justify-start"
//     >
//       <div className="flex scale-75 flex-wrap items-center justify-evenly min-h-screen gap-8 dark:bg-blue-100 dark:bg-lightBG">
//         <div className="flex flex-col md:flex-row bg-gradient-to-b from-bgColor to-[#301F0A] dark:from-white dark:to-orange-100 w-[90%] mt-8 mb-16 border-textColor1 border-[5px] rounded-3xl overflow-auto">
//           <div className="flex flex-col sm:w-1/2 justify-start p-8 text-textColor1">
//             <p className="md:text-3xl text-xl font-bold mb-8 flex gap-4 items-center">
//               LOG IN
//               <CgProfile />
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
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="flex justify-center items-center py-2 px-2 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-md w-full leading-tight focus:outline-none focus:shadow-outline text-textColor1 placeholder-textColor1 focus:scale-105"
//                 placeholder="Enter your password"
//                 aria-label="Enter your password"
//                 required
//               />
//               <a
//                 href="#"
//                 className="text-textColor2 text-base dark:text-gray-600"
//               >
//                 Forgot Password?
//               </a>
//               <button
//                 className="border-2 mt-2 font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 focus:scale-105 focus:outline-none"
//                 type="submit"
//               >
//                 {loading ? "Logging in..." : "LOG IN"}
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
//                 type="button"
//               >
//                 <p className="text-center flex justify-center items-center gap-3">
//                   <FcGoogle />
//                   {googleLoading ? "Signing in..." : "Sign In with Google"}
//                 </p>
//               </button>
//               <button
//                 className="border-2 mt-2 font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 focus:scale-105 focus:outline-none"
//                 onClick={handleGitHubSignIn}
//                 type="button"
//               >
//                 <p className="text-center flex justify-center items-center gap-3">
//                   <SiGithub />
//                   {githubLoading ? "Signing in..." : "Sign In with GitHub"}
//                 </p>
//               </button>
//             </form>
//           </div>
//           <div className="flex flex-col gap-4 justify-center items-center sm:w-1/2 p-10 bg-textColor1">
//             <h1 className="md:text-4xl text-2xl font-extrabold">NEW HERE?</h1>
//             <p className="md:text-xl text-lg font-light text-center mb-8">
//               Sign up and discover a great amount of new opportunities and
//               endless access to resources!
//             </p>
//             <motion.a
//               variants={childVarient}
//               href="/signup"
//               className="flex justify-center bg-black text-textColor1 px-5 py-4 w-3/4 rounded-md border-2-textColor1 text-lg md:text-2xl font-medium hover:scale-105 hover:shadow-sm focus:scale-105 focus:outline-none"
//             >
//               SIGN UP
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Login;
