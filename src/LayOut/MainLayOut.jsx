import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayOut = () => {
    return (
        <div>
          <Navbar/>
          <Outlet/>  
          <Footer/>
        </div>
    );
};

export default MainLayOut;