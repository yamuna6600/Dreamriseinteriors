"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className="w-full shadow-sm bg-white relative z-50">
      <div className="max-w-8xl mx-auto px-5 md:px-14 py-4 flex items-center justify-between">
        
        {/* LEFT — Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Avior Logo"
              className="h-20"
            />
          </a>
        </div>

        {/* CENTER — Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <a href="/#" className="text-black">About Us</a>
          
          <a href="/#" className="text-black">Services</a>
          <a href="/#" className="text-black">Gallery</a>
          <a href="/#" className="text-black">Blog</a>
        </nav>

        {/* RIGHT — Phone + Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <a href="tel:9012808959">
              <PhoneIcon className="h-5 w-5 text-gray-600" />
            </a>
          </div>
          <a href="/contact">
            <button className="bg-[#9a3f13] text-white px-6 py-2 rounded-full font-semibold">
           Connect With Us
            </button>
          </a>
        </div>

        {/* MOBILE — Hamburger */}
        <button className="md:hidden z-50" onClick={() => setOpen(true)}>
          <Bars3Icon className="h-8 w-8 text-gray-700" />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <>
          {/* Dark Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 shadow-lg px-6 py-6 space-y-4">
            
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <XMarkIcon className="h-7 w-7 text-gray-700" />
              </button>
            </div>

            <a href="/events" className="block py-3 border-b text-lg text-black">Events</a>
            <a href="/packages" className="block py-3 border-b text-lg text-black">Packages</a>
            <a href="/insights" className="block py-3 border-b text-lg text-black">Insights</a>
            <a href="/gallery" className="block py-3 border-b text-lg text-black">Gallery</a>

            <div className="flex items-center space-x-3 pt-6">
              <div className="bg-gray-100 p-2 rounded-full">
                <a href="tel:9012808959">
                  <PhoneIcon className="h-5 w-5 text-black" />
                </a>
              </div>
              <a href="/contact" className="w-full">
                <button className="bg-[#9a3f13] text-white px-5 py-3 w-full rounded-full font-semibold">
                  Connect With Us
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
