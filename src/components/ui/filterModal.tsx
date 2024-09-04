import { useFilterButtonContext } from "@/contexts/FilterButtonContext";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const items = [
  { name: "Select All", shortcut: "Ctrl + A" },
  { name: "Copy Selection", shortcut: "Ctrl + C" },
  { name: "Cut Selection", shortcut: "Ctrl + X" },
  { name: "Paste Selection", shortcut: "Ctrl + V" },
  { name: "Undo", shortcut: "Ctrl + Z" },
  { name: "Redo", shortcut: "Ctrl + Y" },
  { name: "Delete Selection", shortcut: "Delete" },
  { name: "Center Selection", shortcut: "Spacebar" },
  { name: "Go to Full Screen", shortcut: "F11" },
  { name: "Add new node on canvas", shortcut: "Double Left Click" },
  { name: "Add label on link", shortcut: "Double Click on Link" },
  { name: "Open Context Menu", shortcut: "Right Click on Selection" },
  { name: "Selection Box", shortcut: "Left Click Hold & Drag" },
  { name: "Switch Scrolling Mods", shortcut: "Middle Mouse Button" },
  { name: "Move Selection", shortcut: "Arrow Keys" },
  { name: "Precise Selection Movement", shortcut: "Ctrl + Arrow Keys" },
  { name: "Free Rotation", shortcut: "Shift + Rotate" },
  { name: "Rescale Selection", shortcut: "Drag Bottom Right Corner" },
  { name: "Multiple Selection", shortcut: "Shift/Ctrl + Select" },
  { name: "Group Selection", shortcut: "Ctrl + G" },
  { name: "Ungroup Selection", shortcut: "Ctrl + Shift + G" },
  { name: "Zoom In/Out", shortcut: "+ & -" },
  { name: "Zoom to Fit", shortcut: "Shift + Z" },
];

const FilterModal = () => {
  const { buttonState, setButtonState } = useFilterButtonContext();
  const [search, setSearch] = React.useState("");

  const filteredShortcuts = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.shortcut.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {buttonState && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setButtonState(false)}
          className="bg-black/50 fixed  font-Raleway inset-0 z-50 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-body text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10 max-h-[90vh] md:max-h-[80vh]">
              <h3 className="text-center mb-2 flex items-start justify-between">
                <input
                  type="text"
                  placeholder="Search shortcuts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-1.5 pl-2 mb-8 text-white bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-600"
                />
              </h3>
              <ul
                className="h-screen pb-52"
                style={{ scrollbarWidth: "none", overflowY: "scroll" }}
              >
                {filteredShortcuts.map((shortcut, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between px-1 mb-6 border-b border-white border-opacity-5 pb-2"
                  >
                    <p className="py-0.5 text-white">{shortcut.name}</p>
                    <span className="bg-neutral-800 text-neutral-300 py-1 px-1.5 rounded-md font-medium shadow-black shadow-md">
                      {shortcut.shortcut}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block absolute bg-body h-6 w-full bottom-0 left-0 z-50"></div>
            <div
              onClick={() => setButtonState(false)}
              className="block text-center font-bold p-2 md:hidden absolute bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 cursor-pointer h-10 w-full bottom-0 left-0 z-50"
            >
              Close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
