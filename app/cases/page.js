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
        <p className="text-[#E8B44F] tracking-widest uppercase text-xs">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white uppercase">
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
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase tracking-widest font-bold">
                New
              </span>
              <button className="absolute top-2 right-2 bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center text-white hover:text-[#E8B44F] transition text-sm">
                ♡
              </button>
            </div>

            {/* Details */}
            <div className="p-3">
              <h2 className="text-white font-bold text-xs uppercase tracking-wide leading-tight">
                {item.name}
              </h2>
              <p className="text-gray-500 text-xs mt-1 leading-tight">
                {item.material} · {item.color}
              </p>
              <p className="text-[#E8B44F] font-black text-sm mt-2">
                KES {item.price.toLocaleString()}
              </p>
              <a
                href={`https://wa.me/254724673449?text=Hi CaseWorldKE, I am interested in the ${item.name} for KES ${item.price.toLocaleString()}. Is it available?`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-[#E8B44F] text-black text-xs py-2 tracking-widest uppercase font-black hover:bg-[#F3C760] transition rounded-sm"
              >
                💬 Order on WhatsApp
              </a>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-20">
            <p className="text-gray-500 tracking-widest uppercase text-sm">
              No cases found
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
          <p className="text-[#E8B44F] tracking-widest">Loading...</p>
        </div>
      }
    >
      <CasesContent />
    </Suspense>
  );
}
