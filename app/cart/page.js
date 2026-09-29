export default function CartPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-yellow-500 text-4xl mb-4">🛍</p>
        <h1 className="text-3xl font-black text-white tracking-widest uppercase mb-4">
          Your Cart
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">
          Your cart is empty
        </p>
        <a
          href="/cases"
          className="bg-yellow-500 text-black font-black tracking-widest uppercase px-8 py-4 hover:bg-yellow-400 transition inline-block"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
