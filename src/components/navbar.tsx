import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

export const Navbar = ({ hide }: NavbarProps) => {
<<<<<<< Updated upstream
  // state variables
=======
>>>>>>> Stashed changes
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< Updated upstream
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
=======
      setIsAtBottom(window.scrollY > 10);
>>>>>>> Stashed changes
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< Updated upstream
  // Scroll to top
  const scrollToTop = () => {
    setActive("Home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setToggle(false); // close mobile menu
=======
  // ✅ Smooth scroll to top (Home)
  const handleHomeClick = () => {
    setActive("Home");
    setToggle(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
>>>>>>> Stashed changes
  };

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20 bg-primary transition-all duration-300",
        isScrolled || hide 
          ? "mt-0 shadow-lg shadow-purple-500/10 backdrop-blur-sm bg-primary/90" 
          : "mt-20"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
<<<<<<< Updated upstream
        {/* Logo with hover effects */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={scrollToTop}
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="w-9 h-9 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]" 
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex transition-all duration-300 group-hover:tracking-wider group-hover:text-[#915eff]">
=======
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold flex">
>>>>>>> Stashed changes
            DWW&nbsp;<span className="sm:block hidden">| Developer's</span>
          </p>
        </div>

<<<<<<< Updated upstream
        {/* Nav Links (Desktop) with hover effects */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* Home Button */}
          <li
            className={cn(
              active === "Home" ? "text-white" : "text-secondary",
              "relative text-[18px] font-medium cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-purple-500/10 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(145,94,255,0.2)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#915eff] after:to-[#6b3bff] after:transition-all after:duration-300 hover:after:w-[70%]",
              active === "Home" && "after:w-[70%]"
            )}
            onClick={scrollToTop}
=======
        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          
          {/* ✅ Home Button */}
          <li
            className={cn(
              active === "Home" ? "text-white" : "text-secondary",
              "hover:text-white text-[18px] font-medium cursor-pointer"
            )}
            onClick={handleHomeClick}
>>>>>>> Stashed changes
          >
            Home
          </li>

<<<<<<< Updated upstream
=======
          {/* Other Links */}
>>>>>>> Stashed changes
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-secondary",
                "relative text-[18px] font-medium cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-purple-500/10 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(145,94,255,0.2)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#915eff] after:to-[#6b3bff] after:transition-all after:duration-300 hover:after:w-[70%]",
                active === link.title && "after:w-[70%]"
              )}
              onClick={() => {
                setActive(link.title);
                setToggle(false);

                if (!link.link) {
                  const section = document.getElementById(link.id);
                  section?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.link ? (
                <a href={link.link} target="_blank" rel="noreferrer noopener">
                  {link.title}
                </a>
              ) : (
                link.title
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300 hover:rotate-90 hover:scale-110"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Dropdown with animations */}
          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col animate-in slide-in-from-top-5 duration-300"
            )}
          >
<<<<<<< Updated upstream
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* Home Button */}
              <li
                className={cn(
                  active === "Home" ? "text-white" : "text-secondary",
                  "font-poppins font-medium cursor-pointer text-[16px] transition-all duration-200 hover:text-white hover:translate-x-1"
                )}
                onClick={scrollToTop}
=======
            <ul className="list-none flex flex-col gap-4">

              {/* ✅ Home Button Mobile */}
              <li
                className={cn(
                  active === "Home" ? "text-white" : "text-secondary",
                  "font-poppins font-medium cursor-pointer text-[16px]"
                )}
                onClick={handleHomeClick}
>>>>>>> Stashed changes
              >
                Home
              </li>

<<<<<<< Updated upstream
=======
              {/* Other Links Mobile */}
>>>>>>> Stashed changes
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px] transition-all duration-200 hover:text-white hover:translate-x-1"
                  )}
                  onClick={() => {
<<<<<<< Updated upstream
                    !link.link && setActive(link.title);
                    setToggle(false); // close menu after click
=======
                    setActive(link.title);
                    setToggle(false);

                    if (!link.link) {
                      const section = document.getElementById(link.id);
                      section?.scrollIntoView({ behavior: "smooth" });
                    }
>>>>>>> Stashed changes
                  }}
                >
                  {link.link ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.title}
                    </a>
                  ) : (
                    link.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};