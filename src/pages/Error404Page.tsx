import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404Page;