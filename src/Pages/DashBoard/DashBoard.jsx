import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

const DashBoard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <Sidebar/>
      
        <div className='bg-[#F1F3F4] flex-1  md:ml-64'>
          <div className='p-5'>{/* Outlet for dynamic contents */}
          <Outlet/>
          </div>
        </div>
      </div>
    );
};

export default DashBoard;