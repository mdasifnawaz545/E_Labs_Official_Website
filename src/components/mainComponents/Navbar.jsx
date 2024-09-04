import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/Images/Trasnparent12 1.png";
import night from "/Images/Night.png";
import day from "/Images/Day.png";
import menu from "/Images/menu.svg";
import close from "/Images/close.svg";
import Button from "../subComponents/Button";
import ImageButton from "../subComponents/ImageButton";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/courses", label: "Courses" },
    { to: "/projects", label: "Projects" },
    { to: "/gallery", label: "Gallery" },
];

const Navbar = () => {
    const [dark, setDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.position = "";
            document.body.style.width = "";
        }
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleTheme = () => {
        document.querySelector("html").classList.toggle("dark");
        setDark((prev) => !prev);
    };

    const renderNavLinks = (onClickHandler) =>
        navLinks.map(({ to, label }) => (
            <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                    isActive ? "text-textColor1" : ""
                }
                onClick={onClickHandler}
            >
                {label}
            </NavLink>
        ));

    return (
        <>
            <nav className="w-full py-2 px-4 z-50 dark:bg-blue-100 relative flex items-center justify-between">
                <div className="border border-textColor1 p-[0.2rem] rounded-lg ">
                    <Link to="/">
                        <img src={logo} alt="logo" width={38} />
                    </Link>
                </div>
                <div className="md:flex gap-16 items-center text-center text-xl hidden scale-85 dark:text-black">
                    {renderNavLinks()}
                </div>
                <div className="flex items-center gap-1.5">
                    <ImageButton
                        imageSource={dark ? day : night}
                        func={toggleTheme}
                    />
                    <div className="md:hidden">
                        <ImageButton
                            imageSource={isMenuOpen ? close : menu}
                            func={toggleMenu}
                        />
                    </div>
                    <div className="md:flex hidden">
                        <Link to="/signup">
                            <Button buttonName="SIGN UP" />
                        </Link>
                    </div>
                </div>
            </nav>
            <div
                className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-3xl z-40 transition-transform transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full text-2xl space-y-8 dark:text-black">
                    {renderNavLinks(closeMenu)}
                    <Link
                        to="/signup"
                        className="animate-bounce"
                        onClick={closeMenu}
                    >
                        <Button buttonName="SIGN UP"/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
