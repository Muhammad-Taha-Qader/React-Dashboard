import { useState } from 'react';

const ProfileTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="bg-zinc-900  shadow-md rounded-lg p-4 mt-4">
      <div className="flex justify-center space-x-8">
        <button
          className={`text-lg font-semibold ${activeTab === 'posts' ? 'text-indigo-600' : 'text-gray-500'}`}
          onClick={() => handleTabClick('posts')}
        >
          Posts
        </button>
        <button
          className={`text-lg font-semibold ${activeTab === 'followers' ? 'text-indigo-600' : 'text-gray-500'}`}
          onClick={() => handleTabClick('followers')}
        >
          Followers
        </button>
        <button
          className={`text-lg font-semibold ${activeTab === 'following' ? 'text-indigo-600' : 'text-gray-500'}`}
          onClick={() => handleTabClick('following')}
        >
          Following
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;
