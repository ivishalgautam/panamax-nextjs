"use client";
import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsPinMapFill,
} from "react-icons/bs";

import logo from "../public/assets/panamax-footer-logo.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  // {
  //   name: "products",
  //   path: "/products",
  // },
  {
    name: "contact",
    path: "/contact-us",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];
const Footer = () => {
  let navigate = useRouter();
  const { products } = useSelector((store) => store.products);

  return (
    <footer className="bg-gradient-to-r from-[#001234] to-[#000123] w-full px-4 md:px-12">
      {/* logo and address */}
      <div className="flex-box-center flex-wrap max-w-[1200px] mx-auto bg-white rounded-b-xl py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          {/* logo */}
          <figure className="flex-box-center">
            <Image
              src={logo}
              alt="Panamax logo"
              className="w-40 object-center"
            />
          </figure>

          {/* address */}
          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsFillEnvelopeFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Mail us at:</p>
              <h2 className="font-bold text-sm">info@panamax.co.in</h2>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsFillTelephoneFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Call us at:</p>
              <h2 className="font-bold text-sm">18009992049</h2>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsPinMapFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Address:</p>
              <h2 className="font-bold text-sm">
                Panamax House 594-595/154 <br /> Pooth Khurd Bawana, Delhi,
                110039
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* navigation*/}
      <div className="grid grid-cols-4 mt-6 mx-auto max-w-[1200px] gap-y-8">
        <div className="col-span-4 lg:col-span-3 text-white flex-box-start flex-col items-start md:flex-row gap-4 md:gap-10">
          <div className="grid grid-cols-12 w-full gap-8 md:gap-0">
            {/* product categories */}
            <div className="col-span-12">
              <h2 className="text-xl mb-4 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
                Product Categories
              </h2>
              {/* categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 gap-y-6">
                <ul>
                  {products.slice(0, 10).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {products.slice(10, 20).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {products.slice(20, 30).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* nav list */}
        <div className="col-span-4 lg:col-span-1 !h-auto mt-8 md:mt-0 flex items-start justify-start flex-col rounded-lg gap-2 md:gap-4">
          <h3 className="text-white text-xl relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
            Quick links
          </h3>
          <ul>
            {navList.map((item, key) => {
              return (
                <li
                  key={key}
                  className="text-white mb-1 text-sm md:text-md lg:text-[14px] capitalize nav-list overflow-x-hidden hover:overflow-x-visible relative"
                >
                  <span className="inline-block  transition-all absolute -left-10 top-0">
                    <MdKeyboardArrowRight size={20} className="inline" />
                  </span>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          {/* socials */}
          <div className="mt-auto">
            <h3 className="text-white text-xl mb-2 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
              Socials
            </h3>

            <div className="flex-box-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100064000752424"
                target="_blank"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaFacebookF size={15} className="m-auto" />
              </a>
              <a
                href="https://www.instagram.com/panamax_ltd/"
                target="_blank"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaInstagram size={15} className="m-auto" />
              </a>
              <a
                href="https://www.linkedin.com/company/panamaxltd/"
                target="_blank"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaLinkedinIn size={15} className="m-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-[#00051c] py-3 mt-8">
        {/* copyright */}
        <p className="text-sm text-white text-right">
          Copyright 2023 All right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
