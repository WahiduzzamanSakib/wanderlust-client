"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Wanderlast.png"
            width={140}
            height={50}
            alt="Wanderlust Logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
          <li><Link href="/my-bookings" className="hover:text-blue-600">My Bookings</Link></li>
          <li><Link href="/add-destination" className="hover:text-blue-600">Add Destination</Link></li>
        </ul>

        {/* Right Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/profile" className="text-gray-700 hover:text-blue-600">
            Profile
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow-md">
          <Link href="/" className="block">Home</Link>
          <Link href="/destinations" className="block">Destinations</Link>
          <Link href="/my-bookings" className="block">My Bookings</Link>
          <Link href="/add-destination" className="block">Add Destination</Link>

          <hr />

          <Link href="/profile" className="block">Profile</Link>
          <Link href="/login" className="block text-blue-600">Login</Link>
          <Link href="/signup" className="block text-blue-600">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;