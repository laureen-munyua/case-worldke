export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white tracking-widest uppercase">
          Delivery Info
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
        <p className="text-gray-500 text-xs tracking-widest uppercase mt-3">
          Fast delivery across Kenya
        </p>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto space-y-8">
        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            🚚 Nairobi Delivery
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Same day or next day delivery within Nairobi. Order before 12pm for
            same day delivery.
          </p>
          <p className="text-yellow-500 font-bold text-sm mt-3">
            KES 150 — 200
          </p>
        </div>

        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            📦 Nationwide Delivery
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We deliver to all counties in Kenya via courier. Delivery takes 2-3
            business days.
          </p>
          <p className="text-yellow-500 font-bold text-sm mt-3">
            KES 300 — 500
          </p>
        </div>

        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            🏪 Pick Up
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pick up your order for free at our shop.
          </p>
          <p className="text-white text-sm mt-3">
            Jiji Point Exhibition, Shop B29
          </p>
          <p className="text-gray-500 text-xs mt-1">Mon - Sat: 9am - 6pm</p>
        </div>

        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            💳 Payment Methods
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-yellow-500">✓</span> M-Pesa
            </li>
            <li className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-yellow-500">✓</span> Cash on Delivery
            </li>
            <li className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-yellow-500">✓</span> Bank Transfer
            </li>
          </ul>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/254724673449?text=Hi CaseWorldKE, I would like to place an order."
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-yellow-500 text-black font-black tracking-widest uppercase py-4 hover:bg-yellow-400 transition"
        >
          Order Now via WhatsApp
        </a>
      </div>
    </div>
  );
}
