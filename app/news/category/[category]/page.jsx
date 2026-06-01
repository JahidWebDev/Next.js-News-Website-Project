import NewsByCategory from "@/components/News/NewsByCategory";

export default async function Page({ params }) {
  const resolvedParams = await params;

  const category = resolvedParams.category;

  console.log("CATEGORY:", category);

  return <NewsByCategory category={category} />;
}