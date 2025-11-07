import fs from "fs";
import path from "path";
import SolutionsWrapper from "@/components/wrapper/solution";

function toCamelCase(slug) {
  return slug.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const camelSlug = toCamelCase(slug);

  // Construct path to the JSON file
  const filePath = path.join(process.cwd(), "lib", "data", "solutions", camelSlug, "data.json");

  let solutionData = null;

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    solutionData = JSON.parse(fileContents);
  } catch (error) {
    console.error(`❌ Error loading JSON for slug: ${slug}`, error);
  }

  // Handle case where data is missing
  if (!solutionData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">Solution Not Found</h2>
        <p className="text-gray-500 mt-2">We couldn’t find any data for "{slug}".</p>
      </div>
    );
  }

  return <SolutionsWrapper data={solutionData} />;
}
