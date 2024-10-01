// categories.tsx
import {
  AllApps,
  AiTools,
  AudioTools,
  VideoTools,
  DesignTools,
  ImageUtils,
  Games,
  DesignInsp,
  WebDev,
  SVGs,
  Fonts,
  WebLibs,
  Converter,
  Torrent,
  UsefulSites,
  Streaming,
  PDF,
  Stock,
} from "./Icons";
import { cards } from "./Cards";

// Define the types for category count and category
type CategoryCount = {
  [key: string]: number;
};

interface Category {
  name: string;
  icon: JSX.Element | null;
  count: number;
}

// Define the initial category counts with const assertion for type safety
const initialCategoryCounts = {
  "All Apps": cards.length,
  "AI Tools": 0,
  "Audio Tools": 0,
  "Video Tools": 0,
  "Design Tools": 0,
  "Image Utilities": 0,
  "Game Libraries": 0,
  "Design Inspiration": 0,
  "Web Development": 0,
  "SVG Icons": 0,
  "Font Resources": 0,
  "Web Libraries": 0,
  "File Converters": 0,
  "Torrent Resources": 0,
  "Useful Websites": 0,
  "Streaming Services": 0,
  "Cracked Apps": 0,
  "PDF Utilities": 0,
  "Stock Images": 0,
} as const;

// Function to count occurrences of all categories in cards
const countCategories = (): CategoryCount => {
  const categoryCount: CategoryCount = { ...initialCategoryCounts };

  cards.forEach(({ categories }) => {
    categories.forEach((category) => {
      if (Object.prototype.hasOwnProperty.call(categoryCount, category)) {
        categoryCount[category] += 1;
      }
    });
  });

  return categoryCount;
};

// Get the category counts
const categoryCounts = countCategories();

// Build the categories array
export const categories: Category[] = Object.entries(initialCategoryCounts).map(
  ([name]) => ({
    name,
    icon: getIcon(name),
    count: categoryCounts[name],
  })
);

// Helper function to get the corresponding icon based on category name
const getIcon = (name: string): JSX.Element | null => {
  switch (name) {
    case "All Apps":
      return <AllApps />;
    case "AI Tools":
      return <AiTools />;
    case "Audio Tools":
      return <AudioTools />;
    case "Video Tools":
      return <VideoTools />;
    case "Design Tools":
      return <DesignTools />;
    case "Image Utilities":
      return <ImageUtils />;
    case "Game Libraries":
      return <Games />;
    case "Design Inspiration":
      return <DesignInsp />;
    case "Web Development":
      return <WebDev />;
    case "SVG Icons":
      return <SVGs />;
    case "Font Resources":
      return <Fonts />;
    case "Web Libraries":
      return <WebLibs />;
    case "File Converters":
      return <Converter />;
    case "Torrent Resources":
      return <Torrent />;
    case "Useful Websites":
      return <UsefulSites />;
    case "Streaming Services":
      return <Streaming />;
    case "Cracked Apps":
      return <Torrent />; // Duplicate case; adjust if needed
    case "PDF Utilities":
      return <PDF />;
    case "Stock Images":
      return <Stock />;
    default:
      return null; // or a default icon
  }
};
