import Image from "next/image";
import Link from "next/link";
import { base_api_url } from "@/config/config";

// ================= MENU =================
const menuItems = [
  { id: 1, name: "আন্তর্জাতিক", slug: "international", api: "international" },
  { id: 2, name: "জাতীয়", slug: "national", api: "national" },
  { id: 3, name: "প্রেসক্লাব", slug: "pressclub", api: "pressclub" },
  { id: 4, name: "রাজনীতি", slug: "politics", api: "politics" },
  { id: 5, name: "অর্থনীতি", slug: "economy", api: "economy" },
  { id: 6, name: "খেলা", slug: "sports", api: "sports" },
  { id: 7, name: "বিনোদন", slug: "entertainment", api: "entertainment" },
  { id: 8, name: "লাইফস্টাইল", slug: "lifestyle", api: "lifestyle" },
];

// ================= FETCH ALL NEWS =================
async function fetchNews() {
  try {
    const res = await fetch(`${base_api_url}/api/news`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data?.news || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

// ================= FETCH CATEGORY NEWS =================
async function getCategoryNews(category) {
  try {
    const res = await fetch(
      `${base_api_url}/api/news/category?category=${encodeURIComponent(
        category
      )}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data?.news || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

// ================= IMAGE FIX =================
const getImage = (img) => {
  if (!img) return "https://placehold.co/600x400/png";

  if (typeof img === "string") {
    return img.startsWith("http") ? img : `${base_api_url}/${img}`;
  }

  if (Array.isArray(img)) {
    const first = img[0];

    if (!first) return "https://placehold.co/600x400/png";

    return first.startsWith("http")
      ? first
      : `${base_api_url}/${first}`;
  }

  if (typeof img === "object") {
    const imagePath =
      img?.url ||
      img?.secure_url ||
      img?.image ||
      img?.imageUrl ||
      img?.thumbnail ||
      img?.path;

    if (!imagePath) return "https://placehold.co/600x400/png";

    return imagePath.startsWith("http")
      ? imagePath
      : `${base_api_url}/${imagePath}`;
  }

  return "https://placehold.co/600x400/png";
};

// ================= CLEAN TEXT =================
const cleanText = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

// ================= HERO SIDE CARD =================
const HeroSideCard = ({ item }) => {
  return (
    <Link
      href={`/news/${item?.slug || item?._id}`}
      className="group block border-b border-gray-200 py-3 last:border-none"
    >
      <h3 className="text-[17px] leading-[28px] font-bold text-[#111] group-hover:text-[#BB131A] duration-300 line-clamp-2 break-words">
        {item?.title}
      </h3>
    </Link>
  );
};

// ================= SMALL CARD =================
const SmallCard = ({ item }) => {
  return (
    <Link
      href={`/news/${item?.slug || item?._id}`}
      className="group block"
    >
      <div className="relative w-full h-[190px] overflow-hidden border border-gray-200">
        <Image
          src={getImage(item?.image)}
          alt={item?.title || "news"}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 duration-500"
        />
      </div>

      <h3 className="text-[20px] leading-[30px] font-bold text-[#111] mt-4 group-hover:text-[#BB131A] duration-300 line-clamp-2 break-words">
        {item?.title}
      </h3>
    </Link>
  );
};

// ================= LIST CARD =================
const ListCard = ({ item }) => {
  return (
    <Link
      href={`/news/${item?.slug || item?._id}`}
      className="block border-b border-gray-200 py-3 group last:border-none"
    >
      <h3 className="text-[16px] leading-[26px] font-semibold text-[#111] group-hover:text-[#BB131A] duration-300 line-clamp-2 break-words">
        {item?.title}
      </h3>
    </Link>
  );
};

// ================= CATEGORY SECTION =================
const CategorySection = ({ title, news }) => {
  if (!news || news.length === 0) return null;

  return (
     <section className="mt-14">

  {/* TITLE */}
  <div className="flex items-center justify-between border-b-[2px] border-[#BB131A] pb-2 mb-6">
    <h2 className="text-[32px] font-black text-[#BB131A] tracking-tight">
      {title}
    </h2>

    <button className="text-[#BB131A] text-[16px] font-bold">
      আরও ›
    </button>
  </div>

  {/* 12 NEWS GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

    {news?.slice(0, 12)?.map((item, index) => (
      <Link
        key={index}
        href={`/news/${item?.slug || item?._id}`}
        className="group block"
      >

        {/* IMAGE */}
        <div className="relative w-full h-[180px] overflow-hidden  bg-gray-100">
          <Image
            src={getImage(item?.image)}
            alt={item?.title || "news"}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 duration-500"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-[20px] leading-[30px] font-bold text-[#111] mt-3 group-hover:text-[#BB131A] duration-300 line-clamp-2 break-words">
          {item?.title}
        </h3>

      </Link>
    ))}

  </div>

</section>


  );
};

// ================= MAIN PAGE =================
const HomePage = async () => {
  const allNews = await fetchNews();

  const categoryNews = await Promise.all(
    menuItems.map(async (item) => {
      const news = await getCategoryNews(item.api);

      return {
        ...item,
        news,
      };
    })
  );

  const hero = allNews?.[0];
  const latestNews = allNews?.slice(1, 8);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 py-5">

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

          {/* LEFT HERO */}
          <div className="lg:col-span-6">
            <Link
              href={`/news/${hero?.slug || hero?._id}`}
              className="group block"
            >
              <div className="relative w-full h-[420px] overflow-hidden border border-gray-200">
                <Image
                  src={getImage(hero?.image)}
                  alt={hero?.title || "news"}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 duration-700"
                />
              </div>

              <h1 className="text-[38px] leading-[50px] font-black text-[#111] mt-4 group-hover:text-[#BB131A] duration-300 line-clamp-3 break-words">
                {hero?.title}
              </h1>

              <p className="text-[17px] leading-[30px] text-gray-700 mt-4 line-clamp-3 break-words">
                {cleanText(hero?.description)}
              </p>
            </Link>
          </div>

          {/* MIDDLE NEWS */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {latestNews?.slice(0, 2)?.map((item, i) => (
              <Link
                key={i}
                href={`/news/${item?.slug || item?._id}`}
                className="group block  pb-3"
              >
                <div className="relative w-full h-[180px] overflow-hidden">
                  <Image
                    src={getImage(item?.image)}
                    alt={item?.title || "news"}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 duration-500"
                  />
                </div>

                <h3 className="text-[20px] leading-[30px] font-bold text-[#111] mt-3 px-3 group-hover:text-[#BB131A] duration-300 line-clamp-2">
                  {item?.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3">
            <div className="border border-gray-200">

              <div className="bg-[#BB131A] text-white text-center py-2 text-[18px] font-bold">
                সর্বশেষ
              </div>

              <div className="px-4 py-2">
                {latestNews?.slice(2, 8)?.map((item, i) => (
                  <HeroSideCard item={item} key={i} />
                ))}
              </div>

            </div>
          </div>

        </section>

        {/* CATEGORY SECTION */}
        {categoryNews.map((category) => (
          <CategorySection
            key={category.id}
            title={category.name}
            news={category.news}
          />
        ))}

      </div>
    </main>
  );
};

export default HomePage;