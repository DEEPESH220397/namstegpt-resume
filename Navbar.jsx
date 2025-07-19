import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          NamsteGPT
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            🏠 Home / होम
          </Link>
          <Link to="/resume" className="hover:underline">
            📄 Resume / रिज़्यूमे
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
