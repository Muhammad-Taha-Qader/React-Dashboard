import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Maps from './pages/Maps'; // Import your Maps component
import ProfilePage from './pages/Profile';
import { useState } from 'react';
import SignInPage from './pages/SignInpage';
import SignUpPage from './pages/SignUpPage';
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
          <Route path="/" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />} />
          <Route path="/maps" element={<Maps isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />} />
          <Route path="/profile" element={<ProfilePage isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
