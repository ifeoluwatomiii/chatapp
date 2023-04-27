import Profile from "../components/Profile";
import navitems from "../utilies/NavItems";
import SideMenu from "../components/SideMenu";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<>
	
			<div className="flex items-start justify-between  px-4 min-h-[100vh] ">
				<div className="w-[20%] pt-8">
					<Profile />
					<div className="flex flex-col gap-4 mt-4">
						{navitems.map((navitem) => {
							return <SideMenu navitem={navitem} />;
						})}
					</div>
				</div>
				<div className="w-[60%]">
					<Outlet />
				</div>
				<div className="w-[20%]">
					<h2>Feed Area</h2>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
