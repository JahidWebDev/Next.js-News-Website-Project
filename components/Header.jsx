"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

import logo from "../images/Sobdopoth-News.png";
import logotwo from "../images/Sobdopoth.png";

const Header = () => {

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [date, setDate] = useState("");

  // ================= MENU ITEMS =================
const menuItems = [
  { id: 1, name: "আন্তর্জাতিক", slug: "international", api: "international" },
  { id: 2, name: "জাতীয়", slug: "national", api: "national" },
  { id: 3, name: "প্রেসক্লাব", slug: "pressclub", api: "pressclub" },
  { id: 4, name: "রাজনীতি", slug: "politics", api: "politics" },
  { id: 5, name: "অর্থনীতি", slug: "economy", api: "economy" },
  { id: 6, name: "খেলা", slug: "sports", api: "sports" },
  { id: 7, name: "বিনোদন", slug: "entertainment", api: "entertainment" },
  { id: 8, name: "লাইফস্টাইল", slug: "lifestyle", api: "lifestyle" },
];
  // ================= DATE =================
  useEffect(() => {

    const updateDate = () => {

      const now = new Date();

      const formatted = now.toLocaleDateString("bn-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setDate(formatted);
    };

    updateDate();

    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);

  }, []);

  return (
    <header className="w-full font-sans">

      {/* ================= TOP AREA ================= */}
      <div className="bg-[#f5f5f5] w-full border-b border-gray-300">

        <div className="max-w-[1800px] mx-auto px-4 py-3">

          <div className="flex flex-col items-center justify-center">

            {/* MAIN LOGO */}
            <Link
              href="/"
              className="flex items-center justify-center transition-all duration-300"
            >
              <img
                src={logo.src}
                alt="logo"
                className="w-[180px] md:w-[230px] lg:w-[250px] h-auto object-contain"
              />
            </Link>

            {/* DATE */}
            <p className="text-[13px] md:text-[14px] text-gray-700 mt-1 font-medium text-center">
              {date}
            </p>

          </div>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}
      <div className="w-full bg-[#BB131A] relative shadow-md">

        <div className="max-w-[1300px] mx-auto px-4">

          <div className="flex items-center justify-between h-[70px]">

            {/* LEFT LOGO */}
            <div className="flex items-center justify-center min-w-[75px] h-[75px]">

              <Link
                href="/"
                className="flex items-center justify-center"
              >
                <img
                  src={logotwo.src}
                  alt="logo"
                  className="w-[55px] md:w-[100px] mb-6 h-auto object-contain"
                />
              </Link>

            </div>

            {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden lg:flex items-center text-white text-[15px] font-medium flex-1 justify-center">

              {menuItems.slice(0, 8).map((item, index) => (

                <li
                  key={item.id}
                  className={`px-5 cursor-pointer hover:text-gray-200 transition-all duration-200 ${
                    index !== 7
                      ? "border-r border-white/40"
                      : ""
                  }`}
                >

<Link href={`/news/category/${item.slug}`}>
  {item.name}
</Link>
                </li>
              ))}

            </ul>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-3 text-white relative z-10">

              {/* LIVE BUTTON */}
              <button className="bg-black hover:bg-gray-900 text-white text-[13px] px-4 py-[7px] rounded-md font-semibold shadow-md transition-all">
                Live
              </button>

              {/* ================= DESKTOP SEARCH ================= */}
              <div className="hidden md:flex items-center bg-white rounded-full overflow-hidden h-[40px] w-[230px] shadow-md">

                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  className="w-full h-full px-4 text-black text-[14px] outline-none"
                />

                <button className="bg-black h-full w-[48px] flex items-center justify-center hover:bg-[#222] transition-all">

                  <FaSearch className="text-white text-[15px]" />

                </button>

              </div>

              {/* ================= MOBILE SEARCH ICON ================= */}
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setOpen(false);
                }}
                className="md:hidden"
              >

                {
                  searchOpen ? (
                    <FaTimes className="cursor-pointer text-[19px]" />
                  ) : (
                    <FaSearch className="cursor-pointer text-[18px]" />
                  )
                }

              </button>

              {/* ================= MENU ICON ================= */}
              <button
                onClick={() => {
                  setOpen(!open);
                  setSearchOpen(false);
                }}
                className="lg:hidden"
              >

                {
                  open ? (
                    <FaTimes className="cursor-pointer text-[20px]" />
                  ) : (
                    <FaBars className="cursor-pointer text-[20px]" />
                  )
                }

              </button>

            </div>

          </div>

        </div>

        {/* ================= MOBILE SEARCH ================= */}
        {
          searchOpen && (
            <div className="md:hidden bg-white px-4 py-4 border-t border-gray-200">

              <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-[45px]">

                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  className="w-full h-full px-4 text-black outline-none bg-transparent"
                />

                <button className="bg-black h-full w-[50px] flex items-center justify-center">

                  <FaSearch className="text-white" />

                </button>

              </div>

            </div>
          )
        }

        {/* ================= MOBILE MENU ================= */}
        {
          open && (
            <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">

              <ul className="flex flex-col">

                {
                  menuItems.map((item) => (
                    <li
                      key={item.id}
                      className="border-b border-gray-200"
                    >

                    <Link href={`/news/category/${item.slug}`}>
  {item.name}
</Link>
                    </li>
                  ))
                }

              </ul>

            </div>
          )
        }

      </div>

    </header>
  );
};

export default Header;