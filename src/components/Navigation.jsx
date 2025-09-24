import ExploreIcon from "../assets/Icons/Explore.svg";
import HobbiesIcon from "../assets/Icons/Hobbies.svg";
import BookmarkIcon from "../assets/Icons/Bookmark.svg";
import NotificationIcon from "../assets/Icons/Notification.svg";
import CartIcon from "../assets/Icons/Cart.svg";
import Dropdown from "./Dropdown.jsx";

const Navigation = ({ isMobile, openDropdown, setOpenDropdown }) => {
  const exploreItems = [
    "People - Community",
    "Places - Venues",
    "Programs - Events",
    "Products - Store",
    "Blogs",
  ];
  const hobbiesItems = ["Hobby 1", "Hobby 2", "Hobby 3"];
  
  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col items-start space-y-4 mt-4"
          : "hidden md:flex items-center space-x-8"
      }`}
    >
      <Dropdown
        title="Explore"
        items={exploreItems}
        icon={<img src={ExploreIcon} alt="" className="h-5 w-5" />}
        isOpen={openDropdown === "explore"}
        onToggle={() =>
          setOpenDropdown(openDropdown === "explore" ? null : "explore")
        }
      />
      <Dropdown
        title="Hobbies"
        items={hobbiesItems}
        icon={<img src={HobbiesIcon} alt="" className="h-5 w-5" />}
        isOpen={openDropdown === "hobbies"}
        onToggle={() =>
          setOpenDropdown(openDropdown === "hobbies" ? null : "hobbies")
        }
      />

      {!isMobile && (
        <>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            <img src={BookmarkIcon} alt="Bookmark" className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            <img
              src={NotificationIcon}
              alt="Notifications"
              className="h-5 w-5"
            />
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            <img src={CartIcon} alt="Cart" className="h-5 w-5" />
          </a>
          <button className="border-2 border-purple-600 text-purple-600 font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
            Sign In
          </button>
        </>
      )}
    </nav>
  );
};

export default Navigation;