import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 px-6 text-center pb-5">
      <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
      >
        Go Back Home
      </Link>

      {/* Optional illustration / icon */}
      
    </div>
  );
}
