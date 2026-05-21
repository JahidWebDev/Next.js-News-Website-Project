"use client";

import { useEffect, useState } from "react";

const NewsByCategory = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:5000/api/news/category?category=${category}`
        );

        const data = await res.json();

        setNews(data?.news || []);
      } catch (error) {
        console.log(error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center text-xl font-semibold mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">
        {category}
      </h1>

      {news.length === 0 ? (
        <div className="text-center text-2xl font-bold">
          No News Found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item._id} className="bg-white shadow-md p-4">
              <img
                src={item.image}
                className="w-full h-[220px] object-cover"
              />
              <h2 className="text-xl font-bold mt-3">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsByCategory;