import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600 px-6 py-12">
      {/* Logo */}
      <div className="text-center mb-10">
        <h2 className="text-yellow-500 font-bold tracking-widest text-lg uppercase">
          CaseWorldKE
        </h2>
        <p className="text-gray-500 text-xs tracking-widest mt-1 uppercase">
          Luxury In Every Case
        </p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Shop */}
        <div>
          <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">
            Shop
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/cases"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                All Cases
              </Link>
            </li>
            <li>
              <Link
                href="/cases"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                New In
              </Link>
            </li>
            <li>
              <Link
                href="/cases"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                Best Sellers
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">
            Help
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/contact"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/refund"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/delivery"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                Delivery Info
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">
            Find Us
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-500 text-xs tracking-widest uppercase">
              Jiji Point Exhibition
            </li>
            <li className="text-gray-500 text-xs tracking-widest uppercase">
              Shop B29
            </li>
            <li>
              <a
                href="mailto:worldkecase@gmail.com"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition"
              >
                worldkecase@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/254724673449"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">
            Follow
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://instagram.com/case_worldke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                Instagram @case_worldke
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@case.worldke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                TikTok @case.worldke
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/254724673449"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs tracking-widest hover:text-yellow-500 transition uppercase"
              >
                WhatsApp +254724673449
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          © 2026 CaseWorldKE — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
