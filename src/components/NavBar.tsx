"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BACKDROP BLUR (only when menu is open) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
        />
      )}

      <nav className="sticky top-0 z-50 w-full bg-white border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Image
            src="/images/lojlogo.png"
            alt="Logo"
            width={136}
            height={52}
            className="h-auto w-30 md:w-34"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            {["Home", "About Us", "Services", "FAQ"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer transition hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-800"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with X */}
        <div className="flex items-center justify-between p-6 border-b">
          <Image
            src="/images/lojlogo.png"
            alt="Logo"
            width={120}
            height={40}
          />
          <button onClick={() => setOpen(false)} className="text-gray-800">
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-8 py-10 text-lg font-medium text-gray-800">
          {["Home", "About Us", "Services", "FAQ"].map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-black transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
