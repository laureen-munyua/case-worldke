import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="px-6 py-16 text-center border-b border-yellow-600">
        <p className="text-yellow-500 text-xs tracking-[0.3em] uppercase mb-4">
          Our Story
        </p>
        <h1 className="text-5xl font-black text-white uppercase leading-tight mb-4">
          Built For How Kenya
        </h1>
        <h1 className="text-5xl font-black text-yellow-500 uppercase leading-tight mb-6">
          Actually Uses A Phone.
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Story */}
      <div className="bg-[#f5f0e8] px-6 py-16">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          CaseWorldKE started with a simple complaint: most cases either protect
          the phone or look good — rarely both.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          We design each finish to survive matatu rides and boardroom meetings
          alike, without hiding the phone underneath it. Every case is tested
          against Nairobi's daily commute before it ever reaches your hands.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-10">
          Find us at Jiji Point Exhibition, Shop B29 — or order online and we'll
          deliver anywhere in Kenya.
        </p>

        {/* Checklist */}
        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="text-yellow-600 mt-1">✓</span>
            Materials sourced for durability, not just looks
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="text-yellow-600 mt-1">✓</span>
            Every case tested against Nairobi's daily commute
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="text-yellow-600 mt-1">✓</span>
            Designed in-house, finished by hand
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="text-yellow-600 mt-1">✓</span>
            Delivered anywhere in Kenya
          </li>
        </ul>

        <Link
          href="/cases"
          className="border border-black text-black px-8 py-4 text-xs tracking-widest uppercase font-bold hover:border-yellow-600 hover:text-yellow-600 transition inline-block"
        >
          Shop The Collection
        </Link>
      </div>

      {/* Values */}
      <div className="px-6 py-16 space-y-8">
        <div className="flex items-start gap-4 border-b border-gray-800 pb-8">
          <span className="text-yellow-500 text-2xl">💎</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-1">
              Premium Materials
            </h3>
            <p className="text-gray-500 text-xs">
              Marble, leather and aramid-fibre finishes
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-gray-800 pb-8">
          <span className="text-yellow-500 text-2xl">🛡</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-1">
              Drop-Tested
            </h3>
            <p className="text-gray-500 text-xs">
              Corner-reinforced against everyday knocks
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-gray-800 pb-8">
          <span className="text-yellow-500 text-2xl">🔒</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-1">
              Secure Payment
            </h3>
            <p className="text-gray-500 text-xs">
              M-Pesa, cards and pay on delivery
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">🚚</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-1">
              Fast Delivery
            </h3>
            <p className="text-gray-500 text-xs">
              Nairobi in 24 hours, nationwide in 3 days
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-yellow-600 px-6 py-12 text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">
          Ready to protect your phone in style?
        </p>
        <Link
          href="/cases"
          className="bg-yellow-500 text-black font-black tracking-widest uppercase px-10 py-4 hover:bg-yellow-400 transition inline-block"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
