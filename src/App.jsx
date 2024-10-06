import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Maps from './pages/Maps'; // Import your Maps component
import { useState } from 'react';

function App() {
  const [isSideBarVisible, setSideBarVisible] = useState(true);
  
  const toggleSideBar = () => {
    setSideBarVisible(!isSideBarVisible); // Toggle sidebar visibility
    console.log(isSideBarVisible)
  };
  return (
    <>
        {/* <Dashboard/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />} />
          <Route path="/maps" element={<Maps isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />} />
          <Route path="/profile" element={<Maps isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
