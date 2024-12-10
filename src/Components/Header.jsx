import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-semibold font-sans">
          <span className="text-white">News</span>
          <span className="text-red-600">Knock</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
