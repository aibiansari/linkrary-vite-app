import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const wrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 20,
      staggerChildren: 0.02,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
};

const dropdownItems = [
  { icon: <FaCircleHalfStroke size={20} />, label: "System" },
  { icon: <MdOutlineLightMode size={20} />, label: "Light" },
  { icon: <MdOutlineDarkMode size={20} />, label: "Dark" },
];

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div ref={dropdownRef} className="relative">
      <FiMenu
        size="1.8em"
        className="cursor-pointer"
        onClick={() => setOpen((pv) => !pv)}
      />

      <motion.ul
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col p-1 rounded-md bg-neutral-950 border border-neutral-800 text-white font-Raleway shadow-xl shadow-black/30 absolute top-[120%] left-[-220%] w-48 overflow-hidden"
      >
        <Link
          onClick={() => setOpen(false)}
          className="w-full p-1.5 text-sm font-semibold rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
          to="/Linkrary/collection"
        >
          Collection
        </Link>

        <Link
          onClick={() => setOpen(false)}
          className="w-full p-1.5 text-sm rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
          to="/Linkrary/about"
        >
          About
        </Link>

        <hr className="border-t my-1 border-neutral-800" />

        <motion.li
          variants={itemVariants}
          className="w-full p-1.5 text-xs pointer-events-none select-none"
        >
          Select a theme
        </motion.li>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 p-2"
        >
          {dropdownItems.map((item, index) => (
            <motion.li
              key={index}
              onClick={() => setOpen(false)}
              className="flex py-1 text-[10px] cursor-pointer flex-col w-12 ring-1 ring-neutral-900 hover:bg-element rounded-md items-center justify-center space-y-1 transition-colors duration-300 ease-out"
              variants={itemVariants}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.li>
          ))}
        </motion.div>
      </motion.ul>
    </motion.div>
  );
};

export default DropDown;
