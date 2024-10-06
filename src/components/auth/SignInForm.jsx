import { Link } from "react-router-dom";

const SignInForm = ({ onSubmit }) => {
  return (
    <div className="w-full max-w-sm mx-auto text-gray-200 bg-zinc-900 shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Sign In
        </button>

        {/* Centered Sign Up Link */}
        <div className="mt-4 flex justify-center">
          <Link to="/signup" className="text-indigo-400 hover:text-indigo-600 font-semibold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
