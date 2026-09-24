"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    price: "",
    brand: "",
    material: "",
    color: "",
    image: "",
  });

  // Fetch all cases
  const fetchCases = () => {
    fetch("/api/cases")
      .then((res) => res.json())
      .then((data) => {
        setCases(data.cases ?? []);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCases();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/cases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
    });
    if (res.ok) {
      alert("Case added successfully!");
      setForm({
        name: "",
        price: "",
        brand: "",
        material: "",
        color: "",
        image: "",
      });
      fetchCases();
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this case?")) return;
    await fetch(`/api/cases/${id}`, { method: "DELETE" });
    fetchCases();
  };

  return (
    <div className="min-h-screen bg-black px-6 py-10">
      <h1 className="text-3xl font-black text-yellow-500 tracking-widest uppercase mb-2">
        Admin Panel
      </h1>
      <div className="w-24 h-1 bg-yellow-500 mb-10"></div>

      {/* Add Case Form */}
      <div className="bg-gray-900 border border-yellow-600 rounded-lg p-6 mb-12">
        <h2 className="text-white font-bold tracking-widest uppercase mb-6">
          Add New Case
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Case Name"
            required
            className="bg-black border border-gray-700 text-white p-3 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Phone Brand (e.g. iPhone 15 Pro)"
            required
            className="bg-black border border-gray-700 text-white p-3 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (KES)"
            type="number"
            required
            className="bg-black border border-gray-700 text-white p-3 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            name="material"
            value={form.material}
            onChange={handleChange}
            placeholder="Material (e.g. Leather)"
            required
            className="bg-black border border-gray-700 text-white p-3 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            name="color"
            value={form.color}
            onChange={handleChange}
            placeholder="Color (e.g. Black & Gold)"
            required
            className="bg-black border border-gray-700 text-white p-3 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="bg-black border border-gray-700 text-white p-3 rounded-md placeholder-gray-600 focus:border-yellow-500 outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black font-bold tracking-widest uppercase py-3 hover:bg-yellow-400 transition"
          >
            Add Case
          </button>
        </form>
      </div>

      {/* Cases Table */}
      <h2 className="text-white font-bold tracking-widest uppercase mb-6">
        All Cases
      </h2>
      {loading ? (
        <p className="text-yellow-500 tracking-widest">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-yellow-600">
              <tr>
                <th className="text-yellow-500 tracking-widest uppercase py-3 pr-4">
                  Name
                </th>
                <th className="text-yellow-500 tracking-widest uppercase py-3 pr-4">
                  Brand
                </th>
                <th className="text-yellow-500 tracking-widest uppercase py-3 pr-4">
                  Price
                </th>
                <th className="text-yellow-500 tracking-widest uppercase py-3 pr-4">
                  Material
                </th>
                <th className="text-yellow-500 tracking-widest uppercase py-3 pr-4">
                  Color
                </th>
                <th className="text-yellow-500 tracking-widest uppercase py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cases.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-800 hover:bg-gray-900 transition"
                >
                  <td className="text-white py-3 pr-4">{item.name}</td>
                  <td className="text-gray-400 py-3 pr-4">{item.brand}</td>
                  <td className="text-yellow-500 py-3 pr-4">
                    KES {item.price.toLocaleString()}
                  </td>
                  <td className="text-gray-400 py-3 pr-4">{item.material}</td>
                  <td className="text-gray-400 py-3 pr-4">{item.color}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 text-xs tracking-widest uppercase hover:text-red-400 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
