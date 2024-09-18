import { FaGithub, FaSearch } from "react-icons/fa";
import { FaArrowRight, FaCircleHalfStroke } from "react-icons/fa6";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useFilterButtonContext } from "@/contexts/useFilterButtonContext";
import { FiMenu } from "react-icons/fi";
import logo from "/logo.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const dropdownItems = [
  { icon: <FaCircleHalfStroke size={20} />, label: "System" },
  { icon: <MdOutlineLightMode size={20} />, label: "Light" },
  { icon: <MdOutlineDarkMode size={20} />, label: "Dark" },
];

type PageProps = {
  page: "search" | "about";
};

const Navbar = ({ page = "search" }: PageProps) => {
  const { buttonState, setButtonState } = useFilterButtonContext();

  return (
    <nav
      className={`bg-body fixed h-20 md:h-16 w-screen z-20 max-w-screen-2xl text-white px-4 md:px-8 flex flex-wrap items-center justify-between ${
        page === "about" ? "border-b-[1px] border-neutral-800" : ""
      }`}
    >
      <div className="flex-shrink-0 w-12 md:w-52 flex items-center mb-2 md:mb-0">
        <Link to="/Linkrary/" className="flex items-center gap-2">
          <img src={logo} alt="Linkrary Logo" className="w-6 h-6" />

          <span className="hidden md:block text-2xl font-Raleway font-bold">
            Linkrary
          </span>
        </Link>
      </div>

      <div className="flex flex-grow justify-center mb-2 md:mb-0">
        {page === "search" ? (
          // Search section
          <div
            onClick={() => setButtonState(!buttonState)}
            className="relative bg-element flex items-center justify-start gap-4 w-56 md:w-72 xl:w-96 p-2 rounded-full hover:bg-hover transition-colors ease-in cursor-pointer"
          >
            <FaSearch size={16} className="text-gray-300 ml-2" />
            <span className="text-neutral-500 italic font-Raleway font-medium">
              Search on Linkrary...
            </span>
            <div className="absolute hidden lg:flex right-4 items-center gap-1.5 text-neutral-500 text-sm">
              <kbd className="ring-neutral-600 ring-1 px-1 rounded">Ctrl</kbd>
              <kbd className="ring-neutral-600 ring-1 px-1 rounded">K</kbd>
            </div>
          </div>
        ) : page === "about" ? (
          // About section with links
          <div className="flex items-center gap-10">
            <Link
              to="/Linkrary"
              className="hover:text-neutral-300 font-Raleway font-semibold text-lg"
            >
              Discover
            </Link>
            <Link
              to="/Linkrary/collection"
              className="hover:text-neutral-300 font-Raleway font-semibold text-lg"
            >
              Collection
            </Link>
          </div>
        ) : null}
      </div>

      <div className="flex w-12 md:w-52 md:space-x-4 mb-2 md:mb-0">
        <a
          href="https://github.com/aibiansari/Linkrary"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center space-x-1.5 hover:text-neutral-300 transition-colors duration-300 ease-in-out group"
        >
          <FaGithub size={20} />
          <span>GitHub Repo</span>
          <FaArrowRight
            size={16}
            className="transition-transform duration-200 ease-linear group-hover:-rotate-45"
          />
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <FiMenu size="1.8em" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark font-Raleway" align="end">
            <DropdownMenuItem>
              <Link className="w-full font-semibold" to="/Linkrary/collection">
                Collection
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" to="/Linkrary/about">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled className="text-xs">
              Select a theme
            </DropdownMenuItem>
            <div className="flex gap-2 p-2 text-neutral-300">
              {dropdownItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="flex text-xs cursor-pointer flex-col w-14 ring-1 ring-neutral-900 rounded-md items-center justify-center space-y-1"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
