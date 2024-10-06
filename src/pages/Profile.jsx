import  { useState } from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileBio from '../components/Profile/ProfileBio';
import ProfileStats from '../components/Profile/ProfileStats';
import ProfileTabs from '../components/Profile/ProfileTabs';
import ProfileContent from '../components/Profile/ProfileContent';
import Sidebar from "../components/SideBar";
import TopNav from "../components/TopNav";

const ProfilePage = ({ isSideBarVisible, toggleSideBar }) => {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (

    <div className=" p-6 pr-0">
    <div className="flex flex-row">

      {/* Sidebar: Fixed width to prevent it from collapsing */}
      <div className={`${(isSideBarVisible) ? 'hidden lg:block' : 'block lg:hidden'}  w-64`}>
        <Sidebar isVisible={isSideBarVisible} />
      </div>

      {/* Main Content: Takes up remaining space */}
      <div className="flex-grow mx-12  ">
        <TopNav toggleSidebar={toggleSideBar} />
        <div className="max-w-4xl mx-auto p-6">
            <ProfileHeader
                name="Muhammad Taha"
                location="Lahore, Pakistan"
                profilePic="../../public/1724596578897.jpg"
            />
            <ProfileBio
                bio="Software Engineer with 10 years of experience in web development and building scalable applications."
            />
            <ProfileStats posts={120} followers={1500} following={180} />
            <ProfileTabs onTabChange={handleTabChange} />
            <ProfileContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  </div>


  );
};

export default ProfilePage;
