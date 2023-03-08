import React from "react";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/30" />
      <h1 className="text-3xl mt-2 text-black font-bold mb-5 text-center">
        Welcome to the Amazon Web Scraper
      </h1>
      <h2 className="text-lg italic text-black/50 text-center">
        The Web Application is dedicated to extract content and data from Amazon
        E-Commerce Store.
      </h2>
    </div>
  );
};

export default HomePage;
