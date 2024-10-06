import RealTimeMapComponent from "../components/RealTimeMapComponent";
import Sidebar from "../components/SideBar";
import TopNav from "../components/TopNav";

const Maps = ({ isSideBarVisible, toggleSideBar }) => {
  return (
    <div className=" p-6 pr-0">
      <div className="flex flex-row">

        {/* Sidebar: Fixed width to prevent it from collapsing */}
        <div className={`${isSideBarVisible ? 'block' : 'hidden'} w-64`}>
          <Sidebar isVisible={isSideBarVisible} />
        </div>

        {/* Main Content: Takes up remaining space */}
        <div className="flex-grow mx-12  ">
          <TopNav toggleSidebar={toggleSideBar} />

          <h1 className="text-2xl font-bold mb-6 mt-6">MAP</h1>
          <RealTimeMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Maps;
