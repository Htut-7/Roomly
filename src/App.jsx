import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
