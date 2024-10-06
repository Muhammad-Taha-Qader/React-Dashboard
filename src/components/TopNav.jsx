import { Bell, MessageCircle,  Menu } from 'react-feather'; // Import necessary icons
import TopNavUser from './TopNavUser';

const TopNav = ({toggleSidebar}) => {


  return (
    <nav className="bg-gray-900 shadow-md p-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center">
        <button className="text-gray-100 focus:outline-none bg-transparent" onClick={toggleSidebar} >
          <Menu className="w-6 h-6" /> {/* Menu icon */}
          
        </button>
      </div>

      {/* Center Section (Empty space) */}
      <div className="flex-grow mx-4"></div>

      {/* Right Section */}
      <div className="flex items-center space-x-1 md:space-x-4">
        <button className="relative text-gray-100 focus:outline-none bg-transparent">
          <Bell />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">4</span>
        </button>
        
        <button className="relative text-gray-100 focus:outline-none bg-transparent">
          <MessageCircle />
        </button>

        <TopNavUser />


        </div>
    </nav>
  );
};

export default TopNav;
