import { FiUserPlus} from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo5.png";
import darkLogo from "../assets/darklogochat.png";
import ToggleMode from "./ToggleMode";
import { useRecoilValue } from "recoil";
import toggleModeState from "../atoms/toggleModeAtom";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
	const isDarkMode = useRecoilValue(toggleModeState);
	return (
		<div className="flex justify-between items-center py-4 px-4  border-b dark:border-[#38444d] shadow-sm h-[80px] sticky top-0 bg-white z-10 dark:bg-[#15202B]">
			<div>
				<img
					className="w-[110px]"
					src={`${isDarkMode ? logo : darkLogo}`}
					alt=""
				/>
			</div>
			<div className="border rounded-lg px-2 flex items-center py-2  dark:bg-[#273347] dark:border-[#1b3044] w-[30%]">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="search"
					className="w-[400px] !outline-none dark:bg-transparent dark:text-white w-full"
				/>
				<CiSearch className="text-2xl dark:text-white w-[10%]" />
			</div>

			<div className="flex items-center gap-6 relative">
				<div className="dark:text-white ">
					<IoMdNotificationsOutline className="text-[30px] " />
					<p className="bg-[#A060FF] rounded-full bottom-3 left-4 w-4 text-center absolute text-white">
						2
					</p>
				</div>
				<ToggleMode />
				<FiUserPlus className="text-[30px] dark:text-white" />
			</div>
		</div>
	);
};

export default Navbar;
