import {FiUserPlus, FiSearch} from "react-icons/fi"
import {CiSearch} from "react-icons/ci"
import logo from "../assets/logo5.png"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4">
        <div>
          <img className="w-[90px]" src={logo} alt="" />
        </div>
        <div className="border rounded-lg px-2 flex items-center py-2">
            <input type="search" name="search" id="search" placeholder="search"/>
            <CiSearch />
        </div>
        <div>
            <FiUserPlus/>
        </div>
    </div>
  )
}

export default Navbar