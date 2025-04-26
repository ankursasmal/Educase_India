import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Create_acc from "./pages/Create_acc";

function App() {
  return (
    <div className="flex justify-center h-screen items-center bg-white">
      <Routes>
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<Create_acc />} path="/signup" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
