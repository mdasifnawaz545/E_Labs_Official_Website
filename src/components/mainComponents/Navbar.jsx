import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/Images/Trasnparent12 1.png";
import night from "/Images/Night.png";
import day from "/Images/Day.png";
import menu from "/Images/menu.svg";
import close from "/Images/close.svg";
import Button from "../subComponents/Button";
import ImageButton from "../subComponents/ImageButton";
// import { auth } from "../subComponents/firebase"; // Adjust the path as necessary
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth"; // Ensure you import signOut

const navLinks = [
  { href: "#home", label: "Home", route: "/" },
  { href: "#aboutPage", label: "About", route: "/about" },
  { href: "#domain", label: "Domain", route: "" },
  // { href: "#eventPage", label: "Events", route: "/events" },
  // { href: "#membersPage", label: "Members", route: "/members" },
  { href: "#galleryPage", label: "Gallery", route: "/gallery" },
  { href: "#feedbackPage", label: "Feedback", route: "/feedback" },
];

const Navbar = () => {
  // const [user] = useAuthState(auth); // Get the current user from context
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "";

      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = href.substring(1);
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      window.scrollTo(0, 0); // Scroll to the top when opening the menu
    }
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    document.querySelector("html").classList.toggle("dark");
    setDark((prev) => !prev);
  };

  // const handleSignOut = async () => {
  //   await signOut(auth); // Call the signOut method
  // };

  const renderNavLinks = (onClickHandler) =>
    navLinks.map(({ href, label, route }) => {
      const isHomePage = location.pathname === "/" || location.pathname === "";
      const targetHref = isHomePage ? href : route;

      return isHomePage ? (
        <a
          key={href}
          href={targetHref}
          className={`hover:text-textColor2 dark:hover:text-textColor1 text-[22px] ${
            activeSection === href.substring(1) ? "text-textColor1" : ""
          }`}
          onClick={onClickHandler}
        >
          {label}
        </a>
      ) : (
        <Link
          key={href}
          to={targetHref}
          className="hover:text-textColor2 text-2xl"
          onClick={() => {
            onClickHandler();
            closeMenu(); // Close the menu on link click
          }}
        >
          {label}
        </Link>
      );
    });

  return (
    <>
      <nav className="w-full py px-4 z-50 dark:bg-transparent sticky top-0 flex flex-row items-center justify-between backdrop-blur-3xl overflow-hidden">
        <div className="border border-textColor1 rounded-lg backdrop-blur-lg my-2 left-4">
          <Link to="/#home">
            <img src={logo} alt="logo" width={48} />
          </Link>
        </div>
        <div className="md:flex gap-10 items-center text-center text-xl hidden scale-85 dark:text-black">
          {renderNavLinks()}
        </div>
        <div className="flex items-center gap-2 right-4">
          <ImageButton imageSource={dark ? day : night} func={toggleTheme} />
          <div className="md:hidden">
            <ImageButton
              imageSource={isMenuOpen ? close : menu}
              func={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} // Add accessibility
            />
          </div>
          {/* <div className="md:flex hidden">
            {user ? (
              <>
                <Link to={`/user/${user.uid}`}>
                  <Button buttonName={user.displayName} userClass="me-2" />
                </Link>
                <span onClick={handleSignOut}>
                  <Button buttonName="SIGN OUT" />
                </span>
              </>
            ) : (
              <Link to="/signup">
                <Button buttonName="SIGN UP" />
              </Link>
            )}
          </div> */}
        </div>
      </nav>

      <div
        className={`relative w-screen h-screen backdrop-blur-3xl z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "hidden translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-2xl space-y-8 dark:text-black">
          {renderNavLinks(closeMenu)}
          {/* {user ? (
            <>
              <Link to={`/user/${user.uid}`}>
                <Button buttonName={user.displayName} userClass="me-2" />
              </Link>
              <span onClick={handleSignOut}>
                <Button buttonName="SIGN OUT" />
              </span>
            </>
          ) : (
            <Link to="/signup" className="animate-bounce" onClick={closeMenu}>
              <Button buttonName="SIGN UP" />
            </Link>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
