import { FaGithub, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Turn as Hamburger } from "hamburger-react";
import logo from "/logo.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="bg-body fixed w-screen max-w-screen-2xl text-white py-6 px-8 flex flex-wrap items-center justify-between">
      <a
        href="/Linkrary/"
        className="flex-shrink-0 w-12 md:w-52 flex items-center gap-2 mb-2 md:mb-0"
      >
        <img src={logo} alt="Linkrary Logo" className="w-6 h-6" />
        <span className="hidden md:block text-2xl font-bold">Linkrary</span>
      </a>

      <div className="flex flex-grow justify-center mb-2 md:mb-0">
        <div className="bg-element flex items-center justify-start gap-4 w-56 md:w-72 xl:w-96 py-3 px-2 rounded-full hover:bg-hover transition-colors ease-in cursor-pointer">
          <FaSearch size={16} className="text-gray-300 ml-2" />
          <span className="text-neutral-500 font-medium">
            Search on Linkrary...
          </span>
        </div>
      </div>

      <div className="flex w-12 md:w-52 md:space-x-4">
        <a
          href="https://github.com/aibiansari/Linkrary"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center space-x-1.5 hover:text-neutral-400 transition-colors duration-300 ease-in-out group"
        >
          <FaGithub size={20} />
          <span>GitHub Repo</span>
          <FaArrowRight
            size={16}
            className="transition-transform duration-300 ease-in-out group-hover:-rotate-45"
          />
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Hamburger size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
