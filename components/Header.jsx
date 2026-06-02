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

  const menuItems = [
    { id: 1, name: "আন্তর্জাতিক", slug: "international" },
    { id: 2, name: "জাতীয়", slug: "national" },
    { id: 3, name: "প্রেসক্লাব", slug: "pressclub" },
    { id: 4, name: "রাজনীতি", slug: "politics" },
    { id: 5, name: "অর্থনীতি", slug: "economy" },
    { id: 6, name: "খেলা", slug: "sports" },
    { id: 7, name: "বিনোদন", slug: "entertainment" },
    { id: 8, name: "লাইফস্টাইল", slug: "lifestyle" },
  ];

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

  const closeMenus = () => {
    setOpen(false);
    setSearchOpen(false);
  };

  return (
    <header className="w-full font-sans">

      {/* TOP AREA */}
      <div className="bg-[#f5f5f5] w-full border-b border-gray-300">
        <div className="max-w-[1800px] mx-auto px-4 py-3">

          <div className="flex flex-col items-center justify-center">

            <Link href="/" onClick={closeMenus}>
              <img
                src={logo.src}
                alt="logo"
                className="w-[180px] md:w-[230px] lg:w-[250px]"
              />
            </Link>

            <p className="text-[13px] md:text-[14px] text-gray-700 mt-1 font-medium text-center">
              {date}
            </p>

          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-[#BB131A] relative shadow-md z-50">

        <div className="max-w-[1300px] mx-auto px-4">

          <div className="flex items-center justify-between h-[70px]">

            {/* LEFT LOGO */}
            <div className="flex items-center shrink-0">
              <Link href="/" onClick={closeMenus}>
                <img
                  src={logotwo.src}
                  alt="logo"
                  className="w-[55px] md:w-[90px]"
                />
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center flex-1 justify-center text-white text-[14px] xl:text-[15px] font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">

              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`px-3 xl:px-4 shrink-0 cursor-pointer hover:text-gray-200 transition-all duration-200 ${
                    index !== menuItems.length - 1
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

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3 text-white shrink-0 relative z-50">

              <button className="bg-black hover:bg-gray-900 text-white text-[13px] px-4 py-[7px] rounded-md font-semibold shadow-md">
                Live
              </button>

              {/* DESKTOP SEARCH */}
              <div className="hidden xl:flex items-center bg-white rounded-full overflow-hidden h-[40px] w-[230px]">

                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  className="w-full h-full px-4 text-black text-[14px] outline-none"
                />

                <button className="bg-black h-full w-[48px] flex items-center justify-center">
                  <FaSearch className="text-white" />
                </button>

              </div>

              {/* TABLET SEARCH */}
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setOpen(false);
                }}
                className="xl:hidden"
              >
                {searchOpen ? <FaTimes /> : <FaSearch />}
              </button>

              {/* MOBILE/TABLET MENU */}
            <button
  onClick={() => setOpen(!open)}
  className="hidden lg:flex items-center justify-center"
>
  {open ? <FaTimes /> : <FaBars />}
</button>

            </div>

          </div>

        </div>

        {/* SEARCH PANEL */}
        {searchOpen && (
          <div className="xl:hidden bg-white px-4 py-4 border-t border-gray-200">

            <div className="flex items-center bg-gray-100 rounded-full h-[45px] overflow-hidden">

              <input
                type="text"
                placeholder="খুঁজুন..."
                className="w-full h-full px-4 outline-none bg-transparent text-black"
              />

              <button className="bg-black w-[50px] h-full flex items-center justify-center">
                <FaSearch className="text-white" />
              </button>

            </div>

          </div>
        )}

{open && (
  <div className="hidden lg:block absolute left-0 top-full w-full bg-white shadow-xl border-t z-40">

    <div className="max-w-[1300px] mx-auto p-6">

      <div className="grid grid-cols-4 gap-4">

        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={`/news/category/${item.slug}`}
            onClick={closeMenus}
            className="p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            {item.name}
          </Link>
        ))}

      </div>

    </div>

  </div>
)}



        {/* MOBILE MENU */}
        {open && (
          <div className="bg-white shadow-lg border-t border-gray-200 absolute w-full left-0 top-full z-40">

            <ul className="flex flex-col">

              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-gray-200"
                >
                  <Link
                    href={`/news/category/${item.slug}`}
                    onClick={closeMenus}
                    className="block px-4 py-3 hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;