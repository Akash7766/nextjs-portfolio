import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import { MenuItems } from "../../@shared/constant/Menu-items";
import {
  FaHome,
  FaTelegramPlane,
  FaBookOpen,
  FaFile,
  FaLaptopCode,
  FaUserAlt,
} from "react-icons/fa";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="navbar bg-[#17181B] lg:hidden">
        <div className="container mx-auto">
          <div className="flex-1 text-left">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Akash Rahman
            </Link>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <label
                htmlFor="my-drawer-2"
                className="btn bg-transparent outline-none border-none hover:bg-transparent drawer-button lg:hidden"
              >
                <FontAwesomeIcon icon={faBars} />
              </label>
            </button>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile 2xl:container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-[#17181B] text-base-content">
            <img src="https://i.ibb.co/f9rDDkM/me.jpg" alt="image" />
            {/* {MenuItems?.map((item) => (
              <>
                <li className="border-b py-1">
                  <Link href={item.menu_link} passHref>
                    <>
                      <i className={item.icon}></i>
                      {item.menu_name}
                    </>
                  </Link>
                </li>
              </>
            ))} */}
            <li className="border-b py-1">
              <Link href="/" className="border-b py-1">
                <a>
                  <FaHome />
                  Home
                </a>
              </Link>
            </li>
            <li className="border-b py-1">
              <Link href="/about">
                <a>
                  <FaUserAlt />
                  About
                </a>
              </Link>
            </li>
            <li className="border-b py-1">
              <Link href="/resume">
                <a>
                  <FaFile />
                  Resume
                </a>
              </Link>
            </li>
            <li className="border-b py-1">
              <Link href="/portfolio">
                <a>
                  <FaLaptopCode />
                  Portfolio
                </a>
              </Link>
            </li>
            <li className="border-b py-1">
              <Link href="/blog">
                <a>
                  <FaBookOpen />
                  Blog
                </a>
              </Link>
            </li>
            <li className="border-b py-1">
              <Link href="/contact">
                <a>
                  <FaTelegramPlane />
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
