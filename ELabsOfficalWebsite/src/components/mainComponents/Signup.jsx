import React, { useState } from "react";
import github from "../../../Images/github.png";

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
        <div className="flex flex-wrap items-center justify-evenly pt-4 min-h-screen gap-8">
            <div className="flex flex-col md:flex-row bg-gradient-to-b from-bgColor to-[#301F0A] w-[90%] mt-16 mb-16  border-textColor1 border-[5px] rounded-3xl overflow-auto">
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
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter your Username"
                            aria-label="Enter your Username"
                            required
                        />
                        <input
                            type="number"
                            id="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
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
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter your E-mail"
                            aria-label="Enter your E-mail"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Enter Password"
                            aria-label="Enter Password"
                            required
                        />
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1 placeholder-textColor1"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            required
                        />
                        <button className="bg-textColor1 text-black px-5 py-4 w-full rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium">
                            {loading ? "Signing up..." : "SIGN UP"}
                        </button>
                        <div className="h-6">
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="flex justify-center items-center px-4">
                            <hr className="w-1/2 h-px bg-textColor2 border-0 rounded" />
                            <span className="mx-2 text-textColor2">or</span>
                            <hr className="w-1/2 h-px bg-textColor2 border-0 rounded" />
                        </div>
                        <a
                            className="bg-bgColor text-textColor1 px-5 py-4 w-full rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium flex justify-center items-center"
                            href="#"
                        >
                            <span className="mx-4 text-5xl">G</span>
                            <span>SIGN IN WITH GOOGLE</span>
                        </a>
                        <a
                            className="bg-bgColor text-textColor1 px-5 py-4 w-full rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium flex justify-center items-center h-20"
                            href="#"
                        >
                            <img
                                src={github}
                                alt="GitHub logo"
                                className="w-12 mx-4"
                            />
                            <span>SIGN IN WITH GITHUB</span>
                        </a>
                    </form>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center text-center sm:w-1/2 p-10 bg-textColor1">
                    <h1 className="md:text-4xl text-2xl font-extrabold mb-8">
                        ALREADY HAVE AN ACCOUNT?
                    </h1>
                    <a
                        href="/login"
                        className="flex justify-center bg-black text-textColor1 px-5 py-4 w-3/4 rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium"
                    >
                        LOG IN
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Signup;
