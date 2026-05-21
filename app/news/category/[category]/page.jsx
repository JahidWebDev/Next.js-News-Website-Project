import NewsByCategory from "@/components/News/NewsByCategory";

export default async function Page({ params }) {
  const { category } = await params;

  console.log("CATEGORY:", category);

  return <NewsByCategory category={category} />;
}