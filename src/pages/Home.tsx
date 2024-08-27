import Navbar from "@/components/ui/navbar";
import React from "react";

const ResponsiveComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-start p-4">
        <div className="max-w-screen-xl w-full bg-body shadow-md rounded-lg p-6">
          <header className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Responsive Design
            </h1>
          </header>
          <main className="flex flex-col md:flex-row items-center justify-between gap-6">
            <section className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                Welcome!
              </h2>
              <p className="text-gray-600">
                This component is designed to be responsive across various
                screen sizes, from mobile to 4k displays.
              </p>
            </section>
            <section className="flex-1 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
              />
            </section>
          </main>
          <footer className="mt-6 text-center">
            <p className="text-neutral-500">
              &copy; {new Date().getFullYear()} Linkrary. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
