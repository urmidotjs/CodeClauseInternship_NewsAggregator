import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Developed by <span className="font-semibold">Urmi Tiwari</span>
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">News</span>
          <span className="text-red-600">Knock</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;