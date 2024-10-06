import { Sliders, User, LogIn, UserPlus, Book, Square, CheckSquare, Grid, AlignLeft, Coffee, BarChart2, Map } from 'react-feather'; // Import specific icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = ({isVisible}) => {
  return (
    <nav className = {`${isVisible ? 'block' : 'hidden'} w-72 h-full text-white bg-gray-800`}>
      <div className="p-4">
        <a className="text-xl font-bold" href="index.html">
          AdminKit
        </a>
      </div>

      <ul className="mt-6">
        <li className="px-4 py-2">
          {/* <a href="index.html" className="flex items-center text-white"> 
            <Sliders className="mr-2" />
            Dashboard
          </a> */}
          <Link to="/" className="flex items-center text-white"> {/* Use Link here */}
            <Sliders className="mr-2" />
            Dashboard
          </Link>
        </li>

        <li className="px-4 py-2">
          <a href="pages-profile.html" className="flex items-center text-white">
            <User className="mr-2" />
            Profile
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="pages-sign-in.html" className="flex items-center text-white">
            <LogIn className="mr-2" />
            Sign In
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="pages-sign-up.html" className="flex items-center text-white">
            <UserPlus className="mr-2" />
            Sign Up
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="pages-blank.html" className="flex items-center text-white">
            <Book className="mr-2" />
            Blank
          </a>
        </li>

        <li className="mt-6 px-4 py-2 font-semibold">Tools & Components</li>

        <li className="px-4 py-2">
          <a href="ui-buttons.html" className="flex items-center text-white">
            <Square className="mr-2" />
            Buttons
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="ui-forms.html" className="flex items-center text-white">
            <CheckSquare className="mr-2" />
            Forms
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="ui-cards.html" className="flex items-center text-white">
            <Grid className="mr-2" />
            Cards
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="ui-typography.html" className="flex items-center text-white">
            <AlignLeft className="mr-2" />
            Typography
          </a>
        </li>

        <li className="px-4 py-2">
          <a href="icons-feather.html" className="flex items-center text-white">
            <Coffee className="mr-2" />
            Icons
          </a>
        </li>

        <li className="mt-6 px-4 py-2 font-semibold">Plugins & Addons</li>

        <li className="px-4 py-2">
          <a href="charts-chartjs.html" className="flex items-center text-white">
            <BarChart2 className="mr-2" />
            Charts
          </a>
        </li>

        <li className="px-4 py-2">
          {/* <a href="../pages/Maps.jsx" className="flex items-center text-white">
            <Map className="mr-2" />
            Maps
          </a> */}
           <Link to="/maps" className="flex items-center text-white"> {/* Use Link here */}
            <Map className="mr-2" />
            Maps
          </Link>
        </li>
      </ul>

      <div className="p-4">
        <div className="bg-gray-700 p-4 rounded">
          <strong>Upgrade to Pro</strong>
          <p className="text-sm mt-2">
            Looking for more components? Check out our premium version.
          </p>
          <a href="upgrade-to-pro.html" className="block mt-3 text-center bg-blue-500 text-white py-2 rounded">
            Upgrade to Pro
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
