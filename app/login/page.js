"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/";
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white tracking-widest uppercase">
            Welcome Back
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
          <p className="text-gray-500 text-xs tracking-widest uppercase mt-3">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-900 border border-gray-700 text-white p-4 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none tracking-widest"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-900 border border-gray-700 text-white p-4 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none tracking-widest"
          />
          <Link
            href="/forgot-password"
            className="text-yellow-500 text-xs tracking-widest uppercase text-right hover:text-yellow-400"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="bg-yellow-500 text-black font-black tracking-widest uppercase py-4 hover:bg-yellow-400 transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-gray-500 text-xs tracking-widest uppercase mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-yellow-500 hover:text-yellow-400"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
