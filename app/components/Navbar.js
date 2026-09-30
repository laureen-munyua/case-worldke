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
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-#d49a35 sticky top-0 z-50">
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
            width={85}
            height={85}
            className="rounded-full"
          />
          <span className="text-#e8b44f font-bold tracking-widest text-sm uppercase">
            CaseWorldKE
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-#e8b44f text-xl"
          >
            🔍
          </button>
          <Link href="/cart" className="relative">
            <span className="text-white hover:text-#e8b44f text-2xl">🛍</span>
            <span className="absolute -top-2 -right-2 bg-#e8b44f text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-#e8b44f text-xs tracking-widest uppercase hidden sm:block"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Search Bar */}
      {searchOpen && (
        <div className="bg-black border-b border-#d49a35 px-6 py-4 sticky top-16 z-40">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cases..."
              autoFocus
              className="flex-1 bg-gray-900 border border-gray-700 text-white px-4 py-2 text-sm tracking-widest placeholder-gray-600 focus:border-#e8b44f outline-none"
            />
            <button
              type="submit"
              className="bg-#e8b44f text-black px-6 py-2 text-xs tracking-widest uppercase font-bold hover:bg-#f3c760 transition"
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
        <div className="bg-black border-b border-#d49a35 px-6 py-6 flex flex-col gap-6 sticky top-16 z-40">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-#e8b44f transition"
          >
            Home
          </Link>
          <Link
            href="/cases"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-#e8b44f transition"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-#e8b44f transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-#e8b44f transition"
          >
            Contact
          </Link>
          <Link
            href="/delivery"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-#e8b44f transition"
          >
            Delivery
          </Link>
          <Link
            href="/refund"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm tracking-widest uppercase hover:text-#e8b44f transition"
          >
            Refund Policy
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-#e8b44f text-sm tracking-widest uppercase hover:text-#f3c760 transition"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}
