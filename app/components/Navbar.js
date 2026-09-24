import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-yellow-600 sticky top-0 z-50">
      {/* Hamburger */}
      <button className="text-white text-xl">☰</button>

      {/* Logo Center */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.jpeg"
          alt="CaseWorld KE"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase">
          CaseWorldKE
        </span>
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-4 text-xl">
        <button className="text-white hover:text-yellow-500">🔍</button>
        <Link href="/cart" className="relative">
          <span className="text-white hover:text-yellow-500">🛍</span>
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
            1
          </span>
        </Link>
      </div>
    </nav>
  );
}
