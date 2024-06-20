import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { GiWomanElfFace } from "react-icons/gi";
import { MdAdd } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <nav className="h-20 bg-gray-200 flex px-4 items-center justify-between font-mono pb-4  ">
        <ul className="flex space-x-8  mr-14">
          <NavLink to="/">
            <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
              <span className="text-xl text-customPurple"> eCommerce </span>
              {/* <GiWomanElfFace size={24} className="text-orange-600 " /> */}
            </li>
          </NavLink>

          <NavLink to="/">
            <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
              <span className="text-xl text-customPurple"> Products </span>
              {/* <GiWomanElfFace size={24} className="text-orange-600 " /> */}
            </li>
          </NavLink>

          <NavLink to="/addproduct">
            <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
              <span className="text-xl text-customPurple"> Add a Product </span>
              <MdAdd size={24}  className="bg-green-600 text-white rounded-md " />
            </li>
          </NavLink>
        </ul>

        <NavLink to="/" className="flex ">
          <h1 className="font-semibold flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
            <span className="text-xl text-customPurple"> Jhon Doe</span>
            <GiWomanElfFace size={24} className="text-orange-600 " />
          </h1>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
