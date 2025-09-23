import ArrowDownIcon from "../assets/Icons/ArrowDown.svg";
import ArrowUpIcon from "../assets/Icons/ArrowUp.svg";

const Dropdown = ({ title, items, icon, isOpen, onToggle }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center font-semibold text-gray-700 hover:text-purple-600 w-full text-left"
      aria-expanded={isOpen}
      aria-haspopup="menu"
    >
      {/* icon can be an <img> or JSX passed in by parent */}
      {icon}
      <span className="ml-2">{title}</span>
      <img src={isOpen? ArrowUpIcon : ArrowDownIcon} alt="" className="ml-2 h-4 w-4" />
    </button>

    {isOpen && (
      <div className="md:absolute z-10 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 md:right-0 border-non">
        <div className="py-1">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 font-[300]"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default Dropdown;
