import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white tracking-widest uppercase">
          Refund Policy
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto space-y-8">
        <div className="border-b border-gray-800 pb-8">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            Returns
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We accept returns within 7 days of delivery. The item must be
            unused, in its original condition and packaging. To initiate a
            return, contact us via WhatsApp or email.
          </p>
        </div>

        <div className="border-b border-gray-800 pb-8">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            Refunds
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Once we receive and inspect the returned item, we will process your
            refund within 3-5 business days. Refunds are issued via M-Pesa or
            the original payment method.
          </p>
        </div>

        <div className="border-b border-gray-800 pb-8">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            Exchanges
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are happy to exchange your case for a different color or model
            within 7 days of delivery, subject to availability. Contact us to
            arrange an exchange.
          </p>
        </div>

        <div className="border-b border-gray-800 pb-8">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            Non-Returnable Items
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Customized or personalized cases cannot be returned unless they
            arrive damaged or defective.
          </p>
        </div>

        <div className="pb-8">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3">
            Damaged Items
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            If your order arrives damaged, please send us a photo within 24
            hours of delivery via WhatsApp or email. We will replace it at no
            extra cost.
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/254724673449?text=Hi CaseWorldKE, I would like to initiate a return."
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-yellow-500 text-black font-black tracking-widest uppercase py-4 hover:bg-yellow-400 transition"
        >
          Contact Us For Returns
        </a>
      </div>
    </div>
  );
}
