import { useState } from 'react'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { CiHome } from "react-icons/ci";




import { Link } from 'react-router-dom'
import MenuItem from '../MenuItem/MenuItem';
import useAuth from '../../Hooks/UseAuth';
// import useRole from '../../Hooks/UseRole'
// import AdminMenu from '../AdminMenu'
// import DonnorMenu from '../DonnorMenu'
// import Volunteer from '../Volunteer'


const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
//   const {role} = useRole()
//   console.log('roleeeee' ,role)

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  const { user,logOut } = useAuth()
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-black text-white flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          <div className="avatar">
    <div className="w-12 rounded-full">
      <img src={user && user.photoURL} />
    </div>
  </div>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-black'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#000000] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className='flex gap-5'>
          <div className="avatar">
    <div className="w-12 rounded-full">
      <img src={user && user.photoURL} />
    </div>
  </div>
            <div>
                <h1 className=' text-white text-xl font-bold'>Hello,</h1>
                <h1 className='text-white text-xl font-bold'>{user && user.displayName}</h1>
            </div>
          </div>
<hr className='my-5' />
          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
           
            <nav>
            <MenuItem
            icon={FcSettings}
            label='My Account'
            address='/dashBoard'
          />
            <MenuItem
            icon={FcSettings}
            
            label='Add Products'
            address='/dashBoard/addProducts'
          />















           {/* admin dashboard */}

            {/* {role ==='admin' && <AdminMenu/>} */}

            {/* donor dashboard */}
            {/* {role ==='donor' && <DonnorMenu/>} */}
            {/* volntiar dashBaord */}
            {/* { role === 'Volunteer' && <Volunteer/>} */}

              {/* Menu Items */}

            
            
            </nav>
          </div>
        </div>

        <div>
          <hr />

       
         <Link to='/'>
         <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-7Volunteer00 transition-colors duration-300 transform'>
            <CiHome className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </button></Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar