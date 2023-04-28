
import FriendSideBarItem from "./FriendSideBarItem";

const FriendSideBar = () => {
	return (
		<div className="dark:text-white py-4 px-4">
			<div className="text-xl">
				<h4 className="font-bold text-2xl">Friends</h4>
			</div>
			<div className="mt-4 text-lg">
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
				<FriendSideBarItem />
			</div>
		</div>
	);
};

export default FriendSideBar;
