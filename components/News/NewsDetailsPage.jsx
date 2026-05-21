// // app/news/[slug]/page.jsx

// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { base_api_url } from "@/config/config";

// // ================= FETCH NEWS =================
// async function fetchNewsById(id) {
//   try {
//     const res = await fetch(`${base_api_url}/api/news/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       return null;
//     }

//     const data = await res.json();

//     return data?.news || data || null;
//   } catch (error) {
//     console.log("Fetch News Error:", error);
//     return null;
//   }
// }

// // ================= FETCH RELATED =================
// async function fetchRelatedNews(category, currentId) {
//   try {
//     const res = await fetch(
//       `${base_api_url}/api/news/category?category=${encodeURIComponent(
//         category
//       )}`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       return [];
//     }

//     const data = await res.json();

//     const newsArray = data?.news || data || [];

//     return newsArray
//       .filter((item) => item?._id !== currentId)
//       .slice(0, 10);
//   } catch (error) {
//     console.log("Related Error:", error);
//     return [];
//   }
// }

// // ================= IMAGE URL =================
// const getImageUrl = (img) => {
//   if (!img) return "/no-image.png";

//   if (typeof img === "string") {
//     return img;
//   }

//   if (Array.isArray(img)) {
//     return img[0] || "/no-image.png";
//   }

//   if (typeof img === "object") {
//     return (
//       img?.url ||
//       img?.image ||
//       img?.secure_url ||
//       img?.path ||
//       "/no-image.png"
//     );
//   }

//   return "/no-image.png";
// };

// // ================= DATE =================
// const formatDate = (date) => {
//   if (!date) return "";

//   return new Date(date).toLocaleDateString("bn-BD", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// };

// // ================= CLEAN HTML =================
// const cleanHTML = (html) => {
//   if (!html) return "";

//   return html
//     .replace(/<script.*?>.*?<\/script>/gi, "")
//     .replace(/on\w+=".*?"/g, "");
// };

// // ================= SIDE CARD =================
// const SideNewsCard = ({ item }) => {
//   const image = getImageUrl(item?.image);

//   return (
//     <Link href={`/news/${item?._id}`}>
//       <div className="flex gap-3 border-b border-gray-200 pb-3 hover:bg-gray-50 p-1 rounded-md transition">
        
//         <div className="relative min-w-[120px] w-[120px] h-[75px] rounded overflow-hidden bg-gray-100">
//           <Image
//             src={image}
//             alt={item?.title || "news"}
//             fill
//             sizes="120px"
//             className="object-cover"
//           />
//         </div>

//         <div className="flex-1">
//           <h3 className="text-[15px] font-semibold leading-5 text-[#111] hover:text-red-600 transition line-clamp-3">
//             {item?.title}
//           </h3>

//           <p className="text-[11px] text-gray-500 mt-1">
//             {formatDate(item?.createdAt)}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// // ================= PAGE =================
// const NewsDetailsPage = async ({ params }) => {
//   const slug = params?.slug;

//   if (!slug) {
//     notFound();
//   }

//   const news = await fetchNewsById(slug);

//   if (!news) {
//     notFound();
//   }

//   const image = getImageUrl(news?.image);

//   const relatedNews = news?.category
//     ? await fetchRelatedNews(news.category, news._id)
//     : [];

//   return (
//     <main className="bg-[#f5f5f5] min-h-screen">

//       {/* TOP HEADER */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
//           <Link href="/">
//             <h2 className="text-[28px] font-black text-red-600">
//               শব্দপথ
//             </h2>
//           </Link>

//           <p className="text-sm text-gray-600 hidden md:block">
//             সর্বশেষ আপডেট : {formatDate(news?.createdAt)}
//           </p>
//         </div>
//       </div>

//       {/* MAIN */}
//       <div className="max-w-7xl mx-auto px-4 py-5">

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-8">

//             <div className="bg-white border border-gray-200 p-4 md:p-7">

//               {/* CATEGORY */}
//               {news?.category && (
//                 <div className="mb-4">
//                   <span className="bg-red-600 text-white px-3 py-1 text-[12px] font-bold rounded">
//                     {news.category}
//                   </span>
//                 </div>
//               )}

//               {/* TITLE */}
//               <h1 className="text-[28px] md:text-[42px] font-black leading-tight text-[#111]">
//                 {news?.title}
//               </h1>

//               {/* META */}
//               <div className="flex flex-wrap items-center gap-3 mt-4 border-b border-gray-200 pb-4 text-gray-500 text-[14px]">
//                 <span>{formatDate(news?.createdAt)}</span>

//                 <span>•</span>

//                 <span>
//                   প্রতিবেদক :{" "}
//                   {news?.author || "নিজস্ব প্রতিনিধি"}
//                 </span>
//               </div>

//               {/* IMAGE */}
//               <div className="relative w-full h-[250px] md:h-[520px] mt-5 rounded overflow-hidden bg-gray-100">
//                 <Image
//                   src={image}
//                   alt={news?.title || "news"}
//                   fill
//                   priority
//                   sizes="100vw"
//                   className="object-cover"
//                 />
//               </div>

//               {/* DESCRIPTION */}
//               <div
//                 className="
//                   prose 
//                   prose-lg 
//                   max-w-none
//                   mt-6
//                   text-[#222]
//                   leading-9
//                   prose-p:mb-6
//                   prose-img:rounded
//                   prose-headings:text-black
//                 "
//                 dangerouslySetInnerHTML={{
//                   __html: cleanHTML(
//                     news?.description ||
//                     news?.content ||
//                     ""
//                   ),
//                 }}
//               />

//               {/* SHARE */}
//               <div className="border-t pt-5 mt-8">
//                 <h3 className="font-bold text-[18px] mb-3">
//                   শেয়ার করুন
//                 </h3>

//                 <div className="flex gap-3 flex-wrap">

//                   <button className="bg-[#1877F2] text-white px-4 py-2 rounded text-sm font-semibold hover:opacity-90">
//                     Facebook
//                   </button>

//                   <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded text-sm font-semibold hover:opacity-90">
//                     Twitter
//                   </button>

//                   <button className="bg-[#25D366] text-white px-4 py-2 rounded text-sm font-semibold hover:opacity-90">
//                     WhatsApp
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* MORE NEWS */}
//             <div className="bg-white border border-gray-200 mt-5 p-4">

//               <div className="flex items-center justify-between border-b pb-2 mb-4">
//                 <h2 className="text-[22px] font-black">
//                   আরো সংবাদ
//                 </h2>

//                 <Link
//                   href="/news"
//                   className="text-red-600 text-sm font-semibold"
//                 >
//                   সব দেখুন
//                 </Link>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {relatedNews.slice(0, 6).map((item) => (
//                   <SideNewsCard
//                     key={item?._id}
//                     item={item}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="lg:col-span-4">

//             {/* LATEST */}
//             <div className="bg-white border border-gray-200 p-4 sticky top-5">

//               <div className="flex items-center justify-between border-b pb-2 mb-4">
//                 <h2 className="text-[20px] font-black">
//                   সর্বশেষ
//                 </h2>

//                 <span className="text-red-600 text-sm font-bold">
//                   আরও »
//                 </span>
//               </div>

//               <div className="space-y-4">
//                 {relatedNews.map((item) => (
//                   <SideNewsCard
//                     key={item?._id}
//                     item={item}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* AD */}
//             <div className="bg-white border border-gray-200 p-3 mt-5">
//               <div className="bg-gradient-to-r from-red-600 to-orange-500 h-[220px] flex items-center justify-center text-white text-3xl font-black rounded">
//                 বিজ্ঞাপন
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default NewsDetailsPage;