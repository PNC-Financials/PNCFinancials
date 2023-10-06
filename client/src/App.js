

import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword, Crypto } from "./pages";
import { useSelector } from "react-redux";
import { userReducer } from "./redux/userSlice";
// import { ThemeProvider } from "styled-components";
import { light, dark } from "./redux/theme";
// import { MyComponent } from "./components";
<script src="http://192.168.56.1:8097"></script>

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/Home" state={{ from: location }} replace />
  );
}

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);

  return (
    
    <div data-theme={theme} className="w-full min-h-[100vh]">
      {/* <MyComponent/> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
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
