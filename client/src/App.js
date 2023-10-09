//Welcome to our pretty little project
//All dependencies
import React from "react";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom"; 
import { Home, Login, Profile, Register, ResetPassword, Crypto, Loader } from "./pages"; //All pages currently
import { useSelector } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

function Layout() {
  const { user } = useSelector((state) => state.user); //Type "localhost:3000" in your browser, it should work
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/Crypto" state={{ from: location }} replace />
  );
}

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);

  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Loader />} />
          <Route path="/home" element={<Home/>} />
        </Route>
        <Route path="/crypto" element={<Crypto/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
