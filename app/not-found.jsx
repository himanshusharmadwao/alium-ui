import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">

      {/* Error Content */}
      <div className="max-w-md">
        <h1 className="text-7xl font-extrabold text-[#3b37ff] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
          Don’t worry — you can always head back to safety.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-block bg-[#3b37ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d2adb] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
