"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white tracking-widest uppercase">
            Reset Password
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
          <p className="text-gray-500 text-xs tracking-widest uppercase mt-3">
            Enter your email to reset
          </p>
        </div>

        {sent ? (
          <div className="text-center">
            <p className="text-yellow-500 tracking-widest uppercase text-sm mb-6">
              ✓ Password reset link sent to your email!
            </p>
            <Link
              href="/login"
              className="text-gray-500 text-xs tracking-widest uppercase hover:text-yellow-500"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-900 border border-gray-700 text-white p-4 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none tracking-widest"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black font-black tracking-widest uppercase py-4 hover:bg-yellow-400 transition"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
            <Link
              href="/login"
              className="text-center text-gray-500 text-xs tracking-widest uppercase hover:text-yellow-500"
            >
              Back to Login
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
