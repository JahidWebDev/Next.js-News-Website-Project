// export default async function NewsDetails({ params }) {
//   const { id } = params;

//   const newsData = await getNews(id);

//   const news = newsData?.news || newsData;

//   if (!news) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold text-red-600">
//           News Not Found
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold mb-5">{news.title}</h1>

//       <div className="relative w-full h-[500px] mb-6">
//         <Image
//           src={news.image}
//           alt={news.title}
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div dangerouslySetInnerHTML={{ __html: news.description }} />
//     </section>
//   );
// }