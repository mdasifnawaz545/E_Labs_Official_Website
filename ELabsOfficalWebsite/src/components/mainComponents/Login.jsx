import { useState } from "react";
import github from "../../../Images/github.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            // Replace this with your actual form submission logic
            if (email !== "test" || password !== "password") {
                setError("Invalid username or password");
                // Clear error after 2 seconds
                setTimeout(() => {
                    setError(null);
                }, 2000);
            } else {
                console.log("Username:", email);
                console.log("Password:", password);
            }
        }, 1000);
    };

    return (
        <div className="flex scale-75 flex-wrap items-center justify-evenly min-h-screen gap-8 dark:bg-blue-100 dark:bg-lightBG">
            <div className="flex flex-col md:flex-row bg-gradient-to-b from-bgColor to-[#301F0A] dark:from-white dark:to-orange-100 w-[90%] mt-8 mb-16 border-textColor1 border-[5px] rounded-3xl overflow-auto">
                <div className="flex flex-col sm:w-1/2 justify-start p-8 text-textColor1">
                    <h1 className="md:text-3xl text-xl font-medium mb-8">LOG IN</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 justify-center text-center text-lg md:text-xl"
                    >
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1  placeholder-textColor1"
                            placeholder="Enter E-mail"
                            aria-label="Enter E-mail"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex justify-center items-center py-5 px-7 shadow appearance-none border-textColor1 border-2 bg-bgColor dark:bg-white rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline text-center text-textColor1  placeholder-textColor1"
                            placeholder="Enter your password"
                            aria-label="Enter your password"
                            required
                        />
                        <a href="#" className="text-textColor2 text-base dark:text-gray-600">
                            Forgot Password?
                        </a>
                        <button className="bg-textColor1  text-black px-5 py-4 w-full rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium hover-effect dark:hover:bg-textColor2 hover:bg-bgColor hover:text-textColor1">
                            {loading ? "Logging in..." : "LOG IN"}
                        </button>
                        <div className="h-2 md:h-4">
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="flex justify-center items-center px-4">
                            <hr className="w-1/2 h-px bg-textColor2 dark:bg-gray-600 border-0 rounded" />
                            <span className="mx-2 text-textColor2 dark:text-gray-600">or</span>
                            <hr className="w-1/2 h-px bg-textColor2 dark:bg-gray-600 border-0 rounded" />
                        </div>
                        <a
                            className="bg-bgColor dark:bg-white text-textColor1 dark:text-black px-5 py-4 w-full rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium flex justify-center items-center hover-effect"
                            href="#"
                        >
                            <span className="mx-4 text-5xl text-textColor1">G</span>
                            <span>SIGN IN WITH GOOGLE</span>
                        </a>
                        <a
                            className="bg-bgColor dark:bg-white text-textColor1 dark:text-black px-5 py-4 w-full rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium flex justify-center items-center hover-effect"
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
                <div className="flex flex-col gap-4 justify-center items-center sm:w-1/2 p-10 bg-textColor1">
                    <h1 className="md:text-4xl text-2xl font-extrabold">NEW HERE?</h1>
                    <p className="md:text-xl text-lg font-light text-center mb-8">
                        Sign up and discover great amount of new opportunities
                        and endless access to resources!
                    </p>
                    <a
                        href="/signup"
                        className="flex justify-center bg-black text-textColor1 px-5 py-4 w-3/4 rounded-[98px] border-2-textColor1 text-lg md:text-2xl font-medium hover-effect hover:bg-textColor1 hover:text-bgColor hover:outline-black hover:shadow-bgColor"
                    >
                        SIGN UP
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
