import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../subComponents/Button";
import ImageButton from "../subComponents/ImageButton";
import { useSelector } from "react-redux";
import "../../styles/OnlyNav.css";

function Navbar() {
    const [darkTheme, setDarkTheme] = useState(true);
    const { theme } = useSelector((state) => state.theme);
    const [ham, setHam] = useState(false);
    const hamberger =
        "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720320235/menu_s65s86.png";

    // Handle hamburger menu visibility
    const handleHamberger = () => {
        setHam((prev) => !prev);
    };

    // Change theme function
    function changeTheme() {
        document.querySelector("html").classList.toggle("dark");
    }

    // Set the theme image based on the current theme
    let themeImage = document.querySelector("html").classList.contains("dark")
        ? "https://res.cloudinary.com/dpqdgcipi/image/upload/v1719394975/Day_v8jqbm.png"
        : "https://res.cloudinary.com/dpqdgcipi/image/upload/v1719394975/Night_kwwujc.png";

    // Effect to handle body scroll behavior
    useEffect(() => {
        if (ham) {
            document.body.style.position = 'fixed'; // Prevents scrolling
            document.body.style.top = `-${window.scrollY}px`; // Adjust position
            document.body.style.left = '0';
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1); // Restore scroll position
        }

        // Cleanup function to reset overflow on unmount
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
        };
    }, [ham]);

    // Close hamburger menu when a link is clicked
    const handleLinkClick = () => {
        setHam(false);
    };

    return (
        <div className="p-2 w-full z-10 dark:bg-blue-100 dark:backdrop-blur-xl relative">
            <div className="w-full p-2 h-16 flex items-center justify-evenly rounded-md navbar-icons">
                <nav
                    className={`w-full ${
                        ham ? "backdrop-blur-" : ""
                    } list-none flex items-center justify-between`}
                >
                    <div className="flex items-center justify-between border-1 border-textColor1 py-1 px-[1px] rounded-lg">
                        <li>
                            <figure className="flex items-center justify-center">
                                <a href="/">
                                    <img
                                        src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
                                        width={54}
                                        alt="LOGO"
                                    />
                                </a>
                            </figure>
                        </li>
                    </div>

                    {/* Navigation links for normal screens */}
                    <div
                        className={`hidden md:flex flex-grow justify-center gap-16 text-textColor2 text-center text-xl relative z-10`}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""}`
                            }
                        >
                            Events
                        </NavLink>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""}`
                            }
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""}`
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""}`
                            }
                        >
                            Gallery
                        </NavLink>
                    </div>

                    {/* Hamburger menu button */}
                    <div className="flex gap-2 pr-1 items-center relative z-20">
                        <li>
                            <ImageButton
                                imageSource={themeImage}
                                func={changeTheme}
                            />
                        </li>

                        {/* Display "SIGN UP" button only on larger screens */}
                        <div className="hidden md:flex gap-2">
                            <li>
                                <Link to="/signup">
                                    <Button buttonName="SIGN UP" userClass="" />
                                </Link>
                            </li>
                        </div>

                        <li>
                            <ImageButton
                                userClass="md:hidden"
                                imageSource={hamberger}
                                func={handleHamberger}
                            />
                        </li>
                    </div>
                </nav>
            </div>

            {/* Navigation links for small screens */}
            <div className={`slide-in-menu backdrop-blur-3xl ${ham ? "show" : ""}`}>
                {ham && (
                    <div className="pt-24 gap-8 flex flex-col items-center text-textColor2 text-2xl flex-wrap">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""} mb-4`
                            }
                            onClick={handleLinkClick}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""} mb-4`
                            }
                            onClick={handleLinkClick}
                        >
                            Events
                        </NavLink>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""} mb-4`
                            }
                            onClick={handleLinkClick}
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""} mb-4`
                            }
                            onClick={handleLinkClick}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""} mb-4`
                            }
                            onClick={handleLinkClick}
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                                `${isActive ? "text-textColor1" : ""} mb-4`
                            }
                            onClick={handleLinkClick}
                        >
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
