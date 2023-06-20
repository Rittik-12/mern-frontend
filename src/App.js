import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { HomePage } from "views/homePage";
// import { LoginPage } from "views/loginPage";
import { ProfilePage } from "views/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme.js";
import LoginPage from "views/loginPage/index.jsx";

function App() {
  const mode=useSelector((state)=>state.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const isAuth=Boolean(useSelector((state)=>state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/home" element={isAuth?<HomePage/>: <Navigate to="/"></Navigate>}></Route>
            <Route path="/profile/:userId" element={isAuth?<ProfilePage/>: <Navigate to="/"></Navigate>}></Route>
          </Routes>
        </ThemeProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
