import fs from "fs";
import path from "path";
import ProductWrapper from "@/components/wrapper/product";
import { notFound } from "next/navigation";

function toCamelCase(slug) {
  return slug.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

const Product = async ({ params }) => {
  const { slug } = await params;
  const camelSlug = toCamelCase(slug);

  // ✅ Build path to JSON file
  const filePath = path.join(
    process.cwd(),
    "lib",
    "data",
    "products",
    camelSlug,
    "data.json"
  );

  // ✅ Check if file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // ✅ Read and parse JSON data
  const fileContents = fs.readFileSync(filePath, "utf8");
  const productData = JSON.parse(fileContents);

  return <ProductWrapper slug={camelSlug} data={productData} />;
};

export default Product;
