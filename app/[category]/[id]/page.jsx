import Image from "next/image";
import { base_api_url } from "@/config/config";

async function getNews(id) {
  try {
    const res = await fetch(`${base_api_url}/api/news/${id}`, {
      cache: "no-store",
    });

    console.log("STATUS:", res.status);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    console.log("API DATA:", data);

    return data;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
}

export default async function NewsDetails({ params }) {
  const { category, id } = await params;

  console.log("CATEGORY:", category);
  console.log("ID:", id);

  const newsData = await getNews(id);

  console.log("NEWS DATA:", newsData);

  const news = newsData?.news;

  if (!news) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          News Not Found
        </h1>

        <p className="mt-4">
          Category: {category}
        </p>

        <p>ID: {id}</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">
        {news.title}
      </h1>

      <div className="relative w-full h-[500px] mb-6">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: news.description,
        }}
      />
    </section>
  );
}