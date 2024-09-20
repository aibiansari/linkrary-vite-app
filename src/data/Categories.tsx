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
  { name: "All Apps", icon: <RiAppsFill />, count: "137" },
  { name: "AI Tools", icon: <FaRobot />, count: "27" },
  { name: "Audio Tools", icon: <FaHeadphones />, count: "9" },
  { name: "Video Tools", icon: <FaVideo />, count: "7" },
  { name: "Design Tools", icon: <FaPaintBrush />, count: "24" },
  { name: "Game Libraries", icon: <FaGamepad />, count: "7" },
  { name: "Design Inspiration", icon: <FaPalette />, count: "27" },
  { name: "Web Development", icon: <FaLaptopCode />, count: "36" },
  { name: "Font Resources", icon: <RiFontSize />, count: "5" },
  { name: "SVG Icons", icon: <FaCodeBranch />, count: "6" },
  { name: "Web Libraries", icon: <MdLibraryBooks />, count: "14" },
  { name: "File Converters", icon: <FaTools />, count: "7" },
  { name: "Torrent Resources", icon: <FaUnlockAlt />, count: "15" },
  { name: "Useful Websites", icon: <FaLightbulb />, count: "40" },
  { name: "Streaming Services", icon: <FaPlay />, count: "14" },
  { name: "Cracked Apps", icon: <FaUnlockAlt />, count: "6" },
  { name: "PDF Utilities", icon: <FaBook />, count: "5" },
  { name: "Stock Images", icon: <FaImages />, count: "3" },
];
