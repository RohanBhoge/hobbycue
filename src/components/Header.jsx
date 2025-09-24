import { useEffect, useRef, useState } from "react";
import LogoIcon from "../assets/Logo.png";
import SearchIcon from "../assets/SearchIcon.svg";
import NotificationIcon from "../assets/Icons/Notification.svg";
import MenuIcon from "../assets/Menu.png";
import Navigation from "./Navigation.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "explore" | "hobbies" | null
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (openDropdown) setOpenDropdown(null);
  };

  return (
    <header className="bg-white shadow-md" ref={headerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src={LogoIcon} alt="Logo" className="h-9 w-auto" />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-center">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-[#939CA3] text-black"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 bg-purple-600 rounded-r-lg">
                <img src={SearchIcon} alt="Search" className="h-5 w-5 text-white ml-3" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <Navigation
              isMobile={false}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <img src={SearchIcon} alt="Search" className="h-5 w-5" />
            <img src={NotificationIcon} alt="Notifications" className="h-5" />
            <button onClick={toggleMenu} className="text-gray-700">
              <img src={MenuIcon} alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 pl-4 pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 bg-purple-600 rounded-r-lg">
                <img src={SearchIcon} alt="Search" className="h-5 w-5 text-white" />
              </div>
            </div>

            <Navigation
              isMobile={true}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />

            <button className="mt-4 w-full border-2 border-purple-600 text-purple-600 font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;