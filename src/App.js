// import "./App.css";
import HomeWork01 from "./components/HomeWork01";
import HomeWork02 from "./components/HomeWork02";
import HomeWork03 from "./components/HomeWork03";
import HomeWork04 from "./components/HomeWork04";
import HomeWork05 from "./components/HomeWork05";
import HomeWork00 from "./components/HomeWork00";
import GiaoDien from "./components/GiaoDien";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome"
import Dashboard from "./pages/Dashboard"
import User from "./pages/User"
import Organ from "./pages/Organ"
import UserCreate from "./pages/UserCreate"
import UserEdit from "./pages/UserEdit"
import UserView from "./pages/UserView"


function App() {
  return (
    <div>
      <GiaoDien></GiaoDien>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="user" element={<User/>}/>
        <Route path="user/create" element={<UserCreate/>}/>
        <Route path="user/:id/edit" element={<UserEdit/>}/>
        <Route path="user/:id" element={<UserView/>}/>
        <Route path="organ" element={<Organ/>}/>
      </Routes>
    </div>
  );
}

export default App;
