import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © 2023
          {/* <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a> */}
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link to="/about">
            <li>
              <a className="hover:text-white me-4 md:me-6">About us</a>
            </li>
          </Link>
          <Link to="/privacypolicy">
            <li>
              <a href="#" className="hover:text-white me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
