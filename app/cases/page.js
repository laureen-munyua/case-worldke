"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CasesPage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cases")
      .then((res) => res.json())
      .then((data) => {
        setCases(data.cases ?? []);
        setLoading(false);
      })
      .catch(() => {
        setCases([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-yellow-500 tracking-widest uppercase text-xs">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white uppercase">New In</h1>
        <p className="text-gray-500 text-sm mt-2">
          Latest finishes, designed for this season.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {cases.map((item) => (
          <div key={item.id} className="relative">
            {/* Image Container */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              {/* NEW Badge */}
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase tracking-widest font-bold">
                New
              </span>
              {/* Heart */}
              <button className="absolute top-2 right-2 bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-white hover:text-yellow-500 transition">
                ♡
              </button>
            </div>

            {/* Details */}
            <div className="mt-3">
              <h2 className="text-white font-bold text-sm">{item.name}</h2>
              <p className="text-gray-500 text-xs mt-1">
                {item.material}, {item.color}
              </p>
              <p className="text-yellow-500 font-bold text-sm mt-2">
                KES {item.price.toLocaleString()}
              </p>
              <a
                href={`https://wa.me/254717074974?text=Hi, I am interested in the ${item.name} for KES ${item.price.toLocaleString()}. Is it available?`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center bg-yellow-500 text-black text-xs py-2 tracking-widest uppercase font-bold hover:bg-yellow-400 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
