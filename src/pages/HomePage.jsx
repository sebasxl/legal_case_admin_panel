import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link to="/users" className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
          Manage Users
        </Link>
        <Link to="/roles" className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-700">
          Manage Roles
        </Link>
        <Link to="/organizations" className="bg-purple-500 text-white py-2 px-4 rounded shadow hover:bg-purple-700">
          Manage Organizations
        </Link>
        <Link to="/clients" className="bg-yellow-500 text-white py-2 px-4 rounded shadow hover:bg-yellow-700">
          Manage Clients
        </Link>
        <Link to="/categories" className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-700">
          Manage Categories
        </Link>
        <Link to="/casetypes" className="bg-pink-500 text-white py-2 px-4 rounded shadow hover:bg-pink-700">
          Manage Case Types
        </Link>
        <Link to="/cases" className="bg-indigo-500 text-white py-2 px-4 rounded shadow hover:bg-indigo-700">
          Manage Cases
        </Link>
        <Link to="/timelineentries" className="bg-teal-500 text-white py-2 px-4 rounded shadow hover:bg-teal-700">
          Manage Timeline Entries
        </Link>
        <Link to="/statuses" className="bg-orange-500 text-white py-2 px-4 rounded shadow hover:bg-orange-700">
          Manage Statuses
        </Link>
        <Link to="/attachments" className="bg-gray-500 text-white py-2 px-4 rounded shadow hover:bg-gray-700">
          Manage Attachments
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
