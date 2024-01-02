import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? 'bg-white  text-black' : 'text-white'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-bold'>{label}</span>
    </NavLink>
  )
}

export default MenuItem