"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

    if (category) {
      fetchNews();
    }
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="flex justify-center items-center py-32">
        <h2 className="text-3xl font-bold">No News Found</h2>
      </div>
    );
  }

  const heroNews = news[0];
  const featuredNews = news[1];
  const smallCards = news.slice(2, 5);
  const moreNews = news.slice(5);

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">

      {/* CATEGORY */}
      <div className="mb-8">
        <p className="text-sm text-gray-500">মতামত</p>

        <h1 className="text-5xl font-bold text-[#BB131A] mt-2">
          {category}
        </h1>

        <div className="mt-4 border-b"></div>
      </div>

      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-12 gap-6">

        {/* HERO */}
        <div className="lg:col-span-7">

          <Link href={`/${category}/${heroNews._id}`}>

            <div className="group cursor-pointer">

              <div className="relative overflow-hidden">

                <img
                  src={heroNews.image}
                  alt={heroNews.title}
                  className="
                  w-full
                  h-[500px]
                  object-cover
                  duration-500
                  group-hover:scale-105
                  "
                />

                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent
                " />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <span className="text-yellow-400 font-bold">
                    মতামত
                  </span>

                  <h2 className="
                  text-white
                  text-3xl
                  md:text-4xl
                  font-bold
                  leading-tight
                  mt-2
                  ">
                    {heroNews.title}
                  </h2>

                </div>

              </div>

            </div>

          </Link>

        </div>

        {/* FEATURED NEWS */}
        <div className="lg:col-span-3">

          {featuredNews && (
            <Link href={`/${category}/${featuredNews._id}`}>

              <div className="group">

                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="
                  w-full
                  h-[220px]
                  object-cover
                  "
                />

                <h3 className="
                mt-3
                text-lg
                font-bold
                leading-7
                group-hover:text-[#BB131A]
                ">
                  {featuredNews.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {featuredNews.description
                    ?.replace(/<[^>]*>/g, "")
                    ?.slice(0, 120)}
                  ...
                </p>

              </div>

            </Link>
          )}

        </div>

        {/* MOST READ */}
        <div className="lg:col-span-2 border-l pl-5">

          <div className="flex gap-6 border-b mb-4">

            <button className="
            font-bold
            border-b-2
            border-[#BB131A]
            pb-2
            ">
              সর্বশেষ
            </button>

            <button className="font-bold pb-2">
              পঠিত
            </button>

          </div>

          {news.slice(0, 5).map((item, index) => (

            <Link
              key={item._id}
              href={`/${category}/${item._id}`}
            >

              <div className="
              flex
              gap-3
              py-4
              border-b
              ">

                <span className="
                text-gray-400
                text-3xl
                font-bold
                ">
                  {index + 1}
                </span>

                <h4 className="
                text-sm
                leading-6
                hover:text-[#BB131A]
                ">
                  {item.title}
                </h4>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* SMALL CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {smallCards.map((item) => (

          <Link
            key={item._id}
            href={`/${category}/${item._id}`}
          >

            <div className="group">

              <img
                src={item.image}
                alt={item.title}
                className="
                w-full
                h-[220px]
                object-cover
                "
              />

              <h3 className="
              mt-3
              text-lg
              font-bold
              leading-7
              group-hover:text-[#BB131A]
              ">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.description
                  ?.replace(/<[^>]*>/g, "")
                  ?.slice(0, 90)}
                ...
              </p>

            </div>

          </Link>

        ))}

      </div>

      {/* ADVERTISEMENT */}
      <div className="my-12">

        <div className="
        bg-gray-100
        h-[220px]
        border
        flex
        items-center
        justify-center
        text-gray-500
        ">
          Advertisement
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid lg:grid-cols-12 gap-8">

        {/* NEWS LIST */}
        <div className="lg:col-span-8">

          {moreNews.map((item) => (

            <Link
              key={item._id}
              href={`/${category}/${item._id}`}
            >

              <div className="
              grid
              md:grid-cols-12
              gap-5
              py-6
              border-b
              group
              ">

                <div className="md:col-span-8">

                  <h3 className="
                  text-2xl
                  font-bold
                  leading-8
                  group-hover:text-[#BB131A]
                  ">
                    {item.title}
                  </h3>

                  <p className="
                  text-gray-600
                  mt-3
                  leading-7
                  ">
                    {item.description
                      ?.replace(/<[^>]*>/g, "")
                      ?.slice(0, 180)}
                    ...
                  </p>

                </div>

                <div className="md:col-span-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    w-full
                    h-[180px]
                    object-cover
                    "
                  />

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4">

          <div className="
          bg-gray-100
          h-[280px]
          border
          flex
          items-center
          justify-center
          text-gray-500
          ">
            Advertisement
          </div>

          <div className="mt-8 border">

            <div className="p-4 bg-gray-50 border-b">

              <h3 className="font-bold">
                জনপ্রিয় সংবাদ
              </h3>

            </div>

            {news.slice(0, 5).map((item, index) => (

              <Link
                key={item._id}
                href={`/${category}/${item._id}`}
              >

                <div className="
                flex
                gap-3
                p-4
                border-b
                ">

                  <span className="
                  text-[#BB131A]
                  font-bold
                  text-xl
                  ">
                    {index + 1}
                  </span>

                  <h4 className="text-sm leading-6">
                    {item.title}
                  </h4>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default NewsByCategory;