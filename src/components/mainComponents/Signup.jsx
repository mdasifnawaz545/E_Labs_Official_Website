import { useState } from "react";
import github from "../../../public/Images/github.png";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { SiGithub, SiGoogle } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
function Signup() {
    const [username, setUsername] = useState("");
    const [year, setYear] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            if (password == confirmPassword) {
                setError(null);
            } else {
                setError("Passwords do not match");
                // Clear error after 2 seconds
                setTimeout(() => {
                    setError(null);
                }, 2000);
            }
            // Replace this with your actual form submission logic
            if (username !== "test" || password !== "password") {
                setError("Invalid input. Please check your details.");
                // Clear error after 2 seconds
                setTimeout(() => {
                    setError(null);
                }, 2000);
            } else {
                console.log("Username:", username);
                console.log("Year:", year);
                console.log("Email:", email);
                console.log("Password:", password);
            }
        }, 1000);
    };

    return (
    <div className="flex flex-col items-center justify-start">

    
        <div className="flex scale-75 flex-wrap items-start justify-evenly min-h-screen pt-4 gap-8 dark:bg-blue-100 dark:bg-lightBG">
            <div className="flex flex-col md:flex-row bg-gradient-to-b from-bgColor to-[#301F0A] dark:from-white dark:to-orange-100 w-[90%] mb-16  border-textColor1 border-[5px] rounded-3xl overflow-auto dark:bg-white">
                <div className="flex flex-col sm:w-1/2 justify-start p-8 text-textColor1">
                    <h1 className="md:text-3xl text-xl font-medium mb-8">
                        SIGN UP
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 justify-center text-center text-lg md:text-xl"
                    >
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter your Username"
                            aria-label="Enter your Username"
                            required
                        />
                        <input
                            type="number"
                            id="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter Current Year of Studying"
                            aria-label="Enter Current Year of Studying"
                            min={1}
                            max={4}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter your E-mail"
                            aria-label="Enter your E-mail"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter Password"
                            aria-label="Enter Password"
                            required
                        />
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            required
                        />
                        <button className="bg-textColor1  text-black px-5 py-4 w-full rounded-md border-2-textColor1 text-lg md:text-2xl font-medium hover-effect dark:hover:bg-textColor2 hover:bg-bgColor hover:text-textColor1">
                            {loading ? "Signing up..." : "SIGN UP"}
                        </button>
                        <div className="h-6 md:h-4">
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="flex justify-center items-center px-4">
                            <hr className="w-1/2 h-px bg-textColor2 dark:bg-gray-600 border-0 rounded" />
                            <span className="mx-2 text-textColor2 dark:text-gray-600">or</span>
                            <hr className="w-1/2 h-px bg-textColor2 dark:bg-gray-600 border-0 rounded" />
                        </div>
                        <a
                            className="bg-bgColor dark:bg-white text-textColor1 dark:text-black  py-4 w-full rounded-md border-2-textColor1 text-lg md:text-2xl font-medium flex justify-center items-center hover-effect"
                            href="#"
                        >
                            <p className="w-full text-center flex justify-center items-center gap-3"><FcGoogle/>Sign In with Google</p>
                        </a>
                        <a
                            className="bg-bgColor dark:bg-white text-textColor1 dark:text-black  py-4 w-full rounded-md border-2-textColor1 text-lg md:text-2xl font-medium flex justify-center items-center hover-effect"
                            href="#"
                        >

                        <p className="w-full text-center flex justify-center items-center gap-3"><SiGithub/>Sign In with Google</p>
                        </a>
                    </form>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center text-center sm:w-1/2 p-10 bg-textColor1">
                    <h1 className="md:text-4xl text-2xl font-extrabold mb-8">
                        ALREADY HAVE AN ACCOUNT?
                    </h1>
                    <a
                        href="/login"
                        className="flex justify-center bg-black text-textColor1 px-5 py-4 w-3/4 rounded-md border-2-textColor1 text-lg md:text-2xl font-medium hover-effect hover:bg-textColor1 hover:text-bgColor hover:outline-black hover:shadow-bgColor"
                    >
                        LOG IN
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Signup;
