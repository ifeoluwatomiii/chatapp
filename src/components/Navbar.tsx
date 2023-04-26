import {FiUserPlus, FiSearch} from "react-icons/fi"
import {CiSearch} from "react-icons/ci"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4">
        <div>LOGO.</div>
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