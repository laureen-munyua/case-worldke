"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    if (res.ok) {
      alert("Password reset successfully!");
      window.location.href = "/login";
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white tracking-widest uppercase">
            New Password
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
          <p className="text-gray-500 text-xs tracking-widest uppercase mt-3">
            Enter your new password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-900 border border-gray-700 text-white p-4 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none tracking-widest"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="bg-gray-900 border border-gray-700 text-white p-4 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none tracking-widest"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black font-black tracking-widest uppercase py-4 hover:bg-yellow-400 transition"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
          <Link
            href="/login"
            className="text-center text-gray-500 text-xs tracking-widest uppercase hover:text-yellow-500"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <p className="text-yellow-500 tracking-widest">Loading...</p>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
