"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/cases?search=${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-yellow-600 sticky top-0 z-50">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo Center */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="CaseWorld KE"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase">
            CaseWorldKE
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-yellow-500 text-xl"
          >
            🔍
          </button>
          <Link href="/cart" className="relative">
            <span className="text-white hover:text-yellow-500 text-2xl">🛍</span>
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-yellow-500 text-xs tracking-widest uppercase hidden sm:block"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Search Bar */}
      {searchOpen && (
        <div className="bg-black border-b border-yellow-600 px-6 py-4 sticky top-16 z-40">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cases..."
              autoFocus
              className="flex-1 bg-gray-900 border border-gray-700 text-white px-4 py-2 text-sm tracking-widest placeholder-gray-600 focus:border-yellow-500 outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-2 text-xs tracking-widest uppercase font-bold hover:bg-yellow-400 transition"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-gray-500 hover:text-white text-xl"
            >
              ✕
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-black border-b border-yellow-600 px-6 py-6 flex flex-col gap-6 sticky top-16 z-40">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-yellow-500 transition"
          >
            Home
          </Link>
          <Link
            href="/cases"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-yellow-500 transition"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-yellow-500 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-yellow-500 transition"
          >
            Contact
          </Link>
          <Link
            href="/delivery"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-yellow-500 transition"
          >
            Delivery
          </Link>
          <Link
            href="/refund"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-yellow-500 transition"
          >
            Refund Policy
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-yellow-500 text-sm tracking-widest uppercase hover:text-yellow-400 transition"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}
