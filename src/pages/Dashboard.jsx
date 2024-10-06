import { ShoppingCart, DollarSign, Users, Package} from 'react-feather';
import AnalyticsCard from '../components/Dashboard/AnalyticsCard'; 
import RecentMovementChart from '../components/Dashboard/RecentMovementChart';
import Sidebar from '../components/SideBar';
import TopNav from '../components/TopNav';
import RealTimeMapComponent from '../components/Dashboard/RealTimeMapComponent';
import BrowserUsageComponent from '../components/Dashboard/BrowserUsageComponent';
import CalendarComponent from '../components/Dashboard/CalendarComponent';
const Dashboard = ({isSideBarVisible,toggleSideBar }) => {

  return (
    <div className=" p-6 pr-0">
    {/* <div className="container mx-auto p-6 pr-0"> */}
        <div className='flex flex-row'>

            {/* {isSideBarVisible && <Sidebar className="grow-0 lg:block" />}  */}
            {/* <div className={`${isSideBarVisible ? 'block' : 'hidden'} lg:block`}> */}
            <div className={`${(isSideBarVisible) ? 'hidden lg:block' : 'block lg:hidden'}  w-64`}>
                <Sidebar  isVisible={isSideBarVisible} />
            </div>
            {/* <Sidebar style={{ display: 'none' }} /> */}

            <div className='grow mx-12'>
                <TopNav toggleSidebar={toggleSideBar} />

                <h1 className="text-2xl font-bold mb-6 mt-6">Analytics Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    <AnalyticsCard
                    icon={ShoppingCart}
                    title="Sales"
                    value="2,382"
                    change="-3.65%"
                    changeType="negative"
                    />
                    <AnalyticsCard
                    icon={DollarSign}
                    title="Earnings"
                    value="$21,300"
                    change="+6.65%"
                    changeType="positive"
                    />
                    <AnalyticsCard
                    icon={Users}
                    title="Visitors"
                    value="14,212"
                    change="+5.25%"
                    changeType="positive"
                    />
                    <AnalyticsCard
                    icon={Package}
                    title="Orders"
                    value="64"
                    change="-2.25%"
                    changeType="negative"
                    />
                </div>

                {/* Recent Movement Chart */}
                <RecentMovementChart/>

                <div className='flex flex-col md:flex-row justify-center my-5 gap-x-4'>
                    <CalendarComponent className='max-w-56' />
                    <RealTimeMapComponent  />
                    <BrowserUsageComponent/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
