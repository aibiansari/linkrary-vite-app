// App.tsx
import FilterModal from "@/components/ui/filterModal";
import Navbar from "@/components/ui/navbar";
import HorizontalScroll from "@/components/ui/ScrollX";
import React from "react";

const Saved: React.FC = () => {
  return (
    <>
      <FilterModal />
      <Navbar />
      <HorizontalScroll />
      <div className="flex flex-col min-h-screen bg-body text-white">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-Raleway italic mb-8">
              _Linkrary Saved
            </h1>
            <p className="text-lg mb-6">
              Quality Stuff on the way. Stay tuned!
            </p>
          </div>
        </main>
        <footer className="mt-6 text-center">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} Linkrary. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Saved;
