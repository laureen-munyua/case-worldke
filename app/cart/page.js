"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CasesContent() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

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

  const filtered = cases.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.color.toLowerCase().includes(search.toLowerCase()),
  );

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
        <h1 className="text-4xl font-black text-white uppercase">
          {search ? `Results for "${search}"` : "New In"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          {search
            ? `${filtered.length} cases found`
            : "Latest finishes, designed for this season."}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="relative">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover bg-gray-900"
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase tracking-widest font-bold">
                New
              </span>
              <button className="absolute top-2 right-2 bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-white hover:text-yellow-500 transition">
                ♡
              </button>
            </div>
            <div className="mt-3">
              <h2 className="text-white font-bold text-sm">{item.name}</h2>
              <p className="text-gray-500 text-xs mt-1">{item.brand}</p>
              <p className="text-gray-500 text-xs">
                {item.material} · {item.color}
              </p>
              <p className="text-yellow-500 font-bold text-sm mt-2">
                KES {item.price.toLocaleString()}
              </p>
              <a
                href={`https://wa.me/254724673449?text=Hi, I am interested in the ${item.name} for KES ${item.price.toLocaleString()}. Is it available?`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center bg-yellow-500 text-black text-xs py-2 tracking-widest uppercase font-bold hover:bg-yellow-400 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-20">
            <p className="text-gray-500 tracking-widest uppercase text-sm">
              No cases found for "{search}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CasesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <p className="text-yellow-500 tracking-widest">Loading...</p>
        </div>
      }
    >
      <CasesContent />
    </Suspense>
  );
}
