import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 px-6 shadow-lg transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-blue-500"
      }`}
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">BuzzHub</h1>
        </div>
        <div className="flex items-center w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center text-white text-lg font-semibold">
            <img
              src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
              className="w-10 h-10 rounded-full bg-cover"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
