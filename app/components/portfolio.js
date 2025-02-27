"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "development",
      image: "/images/afridj.png",
      href: "https://www.afridj.com",
    },

    {
      id: 3,
      category: "development",
      image: "/images/niber.png",
      href: "https://www.niber.org",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="py-12 border-b border-gray-200" id="portfolio">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("design")}
          className={`px-4 py-2 rounded ${
            filter === "design" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          Design
        </button>
        <button
          onClick={() => setFilter("development")}
          className={`px-4 py-2 rounded ${
            filter === "development" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          Development
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group">
            <Image
              src={item.image}
              alt={`Portfolio item ${item.id}`}
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-red-500 px-4 py-2 rounded">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
