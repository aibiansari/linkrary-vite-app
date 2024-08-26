// App.tsx
import Navbar from "@/components/ui/navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
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

        <footer className="bg-slate-800 text-center p-3">
          <p className="text-md">
            Crafted by{" "}
            <a
              href="https://github.com/aibiansari"
              className="font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdullah Ansari
            </a>
          </p>
        </footer>
      </div>
      <div className="min-h-screen bg-white">sad</div>
      <div className="min-h-screen bg-gray-500">sad</div>
    </>
  );
};

export default Home;
