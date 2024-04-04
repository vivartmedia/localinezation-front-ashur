"use client";

import {
  Navbar,
  Dropdown,
  Avatar,
  NavbarLink,
  TextInput,
  Button,
} from "flowbite-react";
import { Permanent_Marker } from "next/font/google";
import React, { useEffect } from "react";

const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

const NavbarComponent = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Navbar fluid className=" bg-purple-600 text-white">
        <Navbar.Brand>
        <img src="/assets/localinezationLogo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex gap-5">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            className=" font-bold gap-2"
            label={
              <>
                <Avatar
                  alt="User settings"
                  img="/assets/americanFlag.png"
                  rounded
                />
                <span className=" font-bold pl-2">English (US)</span>
              </>
            }
          >
            <Dropdown.Item className="gap-2">
              <Avatar img="/assets/mexicanFlag.png" rounded />
              <span> Spanish (Latin American)</span>
            </Dropdown.Item>
          </Dropdown>
          <Button className=" font-bold bg-fuchsia-300 text-black">
            Login
          </Button>
        </div>
        {/* <Navbar.Toggle /> */}

        {/* <Navbar.Collapse>
          <Navbar.Link className=" text-white" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className=" text-white" href="#">
            Services
          </Navbar.Link>
          <Navbar.Link className=" text-white" href="#">
            Pricing
          </Navbar.Link>
          <Navbar.Link className=" text-white" href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>

      <Navbar fluid className="bg-fuchsia-300 text-sm">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="font-bold" href="#">
            Submit a Media
          </Navbar.Link>
          <li>-</li>
          <Navbar.Link className="font-bold" href="#">
            Favorites
          </Navbar.Link>
          <li>-</li>
          <Navbar.Link className="font-bold" href="#">
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
        {/* Submit a Media&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Favorites&nbsp;&nbsp;&nbsp;- About Us */}
      </Navbar>
    </>
  );
};

export default NavbarComponent;
