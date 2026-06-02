import Image from "next/image";
import { base_api_url } from "@/config/config";

// ================= GET NEWS =================
async function getNews(slug) {
  const res = await fetch(
    `${base_api_url}/api/news/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}
// ================= PAGE =================
export default async function NewsDetails({ params }) {
  // ✅ FIX: params is async in new Next.js
  const { slug } = await params;

  console.log("SLUG:", slug);

  const newsData = await getNews(slug);

  const news = newsData?.news || newsData;

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">
          News Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-5">
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