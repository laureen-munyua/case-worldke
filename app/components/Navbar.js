import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-3 flex justify-between items-center border-b border-yellow-500">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.jpeg" alt="CaseWorld KE" width={250} height={250} />
      </Link>

      {/* Nav Links */}
      <div className="flex gap-8 text-sm tracking-widest uppercase">
        <Link href="/" className="hover:text-yellow-500 transition">
          Home
        </Link>
        <Link href="/cases" className="hover:text-yellow-500 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-yellow-500 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
