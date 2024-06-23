import { useNavigate } from "react-router-dom";
import { IconLeaf, Links } from "../utils/Index";
import SwitchTheme from "./SwitchTheme";
import { useState, useEffect } from "react";

const useIntersectionObserver = (setActiveSection, thresholdValue, rootMarginValue, dependencies) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: rootMarginValue,
      threshold: thresholdValue,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActiveSection, thresholdValue, rootMarginValue, ...dependencies]);
};

const Navbar = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();
  const homePage = window.location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useIntersectionObserver(setActiveSection, 0.1, "0px 0px -50% 0px", [isLogged]);

  const handleLogOut = () => {
    if (isLogged) {
      localStorage.removeItem("token");
      setIsLogged(false);
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header
        className={`${
          isLogged && !homePage
            ? "bg-gray-50 dark:bg-[#161617] border-gray-300 dark:border-gray-600"
            : "bg-zinc border-gray-900"
        } sticky w-full z-20 top-0 start-0 border-b `}
      >
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <IconLeaf />
            <span
              className={`hidden lg:block self-center text-xl font-semibold whitespace-nowrap ${
                isLogged && !homePage ? "dark:text-white" : "text-white"
              }`}
            >
              Energy App
            </span>
          </a>
          {homePage && (
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              {Links.map((link, index) => (
                <li key={index}>
                  <a
                    className={`text-sm px-2 ${
                      activeSection === link.href.slice(1)
                        ? "text-blue-500"
                        : "text-gray-400"
                    } hover:text-gray-500`}
                    href={link.href}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="flex">
            <a
              href={!isLogged && homePage ? "#home" : "#"}
              className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2"
            >
              <button
                onClick={handleLogOut}
                type="button"
                className={`${
                  homePage
                    ? "text-white hover:bg-gray-700 hidden lg:block "
                    : "text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                }  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  border border-gray-700`}
              >
                {isLogged && !homePage ? "Log out" : "Log in"}
              </button>
              {isLogged && !homePage ? <SwitchTheme /> : null}
            </a>
            {homePage && (
              <button
                className="lg:hidden navbar-burger flex items-center text-blue-600 p-3"
                onClick={toggleMenu}
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            )}
          </div>
        </nav>
        <div className={`navbar-menu relative z-50  ${menuOpen ? "" : "hidden"}`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-600 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-zinc border-r border-gray-800 overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <IconLeaf />
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {Links.map((link, index) => (
                  <li key={index} className="mb-1" onClick={toggleMenu}>
                    <a
                      className={`block p-4 text-sm font-semibold ${
                        activeSection === link.href.slice(1)
                          ? "text-blue-500"
                          : "text-gray-400"
                      } hover:bg-gray-800 hover:text-blue-600 rounded`}
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white focus:ring-4 hover:bg-gray-700 focus:outline-none focus:ring-gray-800  font-medium rounded-lg md:px-5 md:py-2.5 border border-gray-700"
                  href="#home"
                  onClick={toggleMenu}
                >
                  Log in
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>© 2024 Almudena Rendón Fernández.</span>
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
