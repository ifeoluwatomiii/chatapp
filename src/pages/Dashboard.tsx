import Profile from "../components/Profile";
import navitems from "../utilies/NavItems";
import SideMenu from "../components/SideMenu";

import { Outlet } from "react-router-dom";
import FriendSideBar from "../components/FriendSideBar";

const Dashboard = () => {
	return (
		<>
			<div className="flex items-start justify-between  px-4 min-h-[100vh] ">
				<div className="w-[20%] pt-8 sticky top-20">
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
				<div className="w-[20%] sticky top-20">
					<FriendSideBar />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
