import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
        <p className="text-yellow-500 tracking-[0.5em] text-sm uppercase mb-4">
          Premium Quality
        </p>
        <h1 className="text-6xl font-bold text-white tracking-widest uppercase mb-4">
          Protect Your Phone
        </h1>
        <h2 className="text-6xl font-bold text-yellow-500 tracking-widest uppercase mb-8">
          In Style
        </h2>
        <div className="w-24 h-1 bg-yellow-500 rounded-full mb-8"></div>
        <p className="text-gray-400 tracking-widest text-sm uppercase max-w-lg mb-12">
          Luxury meets protection — handpicked phone cases for the bold and
          elegant
        </p>
        <Link
          href="/cases"
          className="bg-yellow-500 text-black px-10 py-4 text-sm tracking-widest uppercase font-bold hover:bg-yellow-400 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Features Row */}
      <div className="border-t border-yellow-500 grid grid-cols-3 text-center">
        <div className="py-10 px-6 border-r border-yellow-500">
          <p className="text-yellow-500 text-2xl mb-2">✦</p>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm">
            Premium Materials
          </h3>
          <p className="text-gray-500 text-xs mt-2 tracking-widest">
            Only the finest quality cases
          </p>
        </div>
        <div className="py-10 px-6 border-r border-yellow-500">
          <p className="text-yellow-500 text-2xl mb-2">✦</p>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm">
            Fast Delivery
          </h3>
          <p className="text-gray-500 text-xs mt-2 tracking-widest">
            Delivered across Kenya
          </p>
        </div>
        <div className="py-10 px-6">
          <p className="text-yellow-500 text-2xl mb-2">✦</p>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm">
            Luxury Designs
          </h3>
          <p className="text-gray-500 text-xs mt-2 tracking-widest">
            Exclusive styles for every taste
          </p>
        </div>
      </div>
    </div>
  );
}
