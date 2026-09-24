export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white tracking-widest uppercase">
          Contact Us
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
        <p className="text-gray-500 text-xs tracking-widest uppercase mt-3">
          We'd love to hear from you
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-md mx-auto space-y-6">
        {/* Location */}
        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6 flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">📍</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">
              Visit Us
            </h3>
            <p className="text-gray-400 text-sm">Jiji Point Exhibition</p>
            <p className="text-gray-400 text-sm">Shop B29, Nairobi, Kenya</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6 flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">✉️</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">
              Email Us
            </h3>
            <a
              href="mailto:worldkecase@gmail.com"
              className="text-gray-400 text-sm hover:text-yellow-500 transition"
            >
              worldkecase@gmail.com
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6 flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">💬</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/254724673449?text=Hi CaseWorldKE, I would like to enquire about your phone cases."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-yellow-500 transition"
            >
              +254 724 673 449
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6 flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">📸</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">
              Instagram
            </h3>
            <a
              href="https://instagram.com/case_worldke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-yellow-500 transition"
            >
              @case_worldke
            </a>
          </div>
        </div>

        {/* TikTok */}
        <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6 flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">🎵</span>
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">
              TikTok
            </h3>
            <a
              href="https://tiktok.com/@case.worldke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-yellow-500 transition"
            >
              @case.worldke
            </a>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/254724673449?text=Hi CaseWorldKE, I would like to enquire about your phone cases."
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-yellow-500 text-black font-black tracking-widest uppercase py-4 hover:bg-yellow-400 transition"
        >
          💬 Chat With Us Now
        </a>
      </div>
    </div>
  );
}
