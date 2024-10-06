import { useState } from 'react';
import { ChevronDown, User, Settings, HelpCircle, BarChart } from 'react-feather'; // Import necessary icons


const TopNavUser = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };

  return (
    <div>
        <div className="relative">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
            <img src="../../public/1724596578897.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
            <span className="text-gray-100">Muhammad Taha</span>
            <ChevronDown className="text-gray-100" />
          </div>
        

          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                <User className="inline-block mr-2" /> Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                <BarChart className="inline-block mr-2" /> Analytics
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                <Settings className="inline-block mr-2" /> Settings & Privacy
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                <HelpCircle className="inline-block mr-2" /> Help Center
              </a>
              <div className="border-t my-2"></div>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Log out
              </a>
            </div>
          )}
          </div>
    </div> 
              
  )
};

export default TopNavUser;