// categories.tsx
import {
  FaVideo,
  FaGamepad,
  FaBook,
  FaHeadphones,
  FaPaintBrush,
  FaLaptopCode,
  FaTools,
  FaLightbulb,
  FaUnlockAlt,
  FaPlay,
  FaCodeBranch,
  FaPalette,
  FaRobot,
  FaImages,
} from "react-icons/fa";
import { RiAppsFill, RiFontSize } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";

export const categories = [
  { name: "All Apps", icon: <RiAppsFill /> },
  { name: "AI Tools", icon: <FaRobot /> },
  { name: "Audio Tools", icon: <FaHeadphones /> },
  { name: "Video Tools", icon: <FaVideo /> },
  { name: "Design Tools", icon: <FaPaintBrush /> },
  { name: "Game Libraries", icon: <FaGamepad /> },
  { name: "Design Inspiration", icon: <FaPalette /> },
  { name: "Web Development", icon: <FaLaptopCode /> },
  { name: "Font Resources", icon: <RiFontSize /> },
  { name: "SVG Icons", icon: <FaCodeBranch /> },
  { name: "Web Libraries", icon: <MdLibraryBooks /> },
  { name: "File Converters", icon: <FaTools /> },
  { name: "Torrent Resources", icon: <FaUnlockAlt /> },
  { name: "Useful Websites", icon: <FaLightbulb /> },
  { name: "Streaming Services", icon: <FaPlay /> },
  { name: "Cracked Apps", icon: <FaUnlockAlt /> },
  { name: "PDF Utilities", icon: <FaBook /> },
  { name: "Stock Images", icon: <FaImages /> },
];
