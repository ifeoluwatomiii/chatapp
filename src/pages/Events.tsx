import { Link } from "react-router-dom";
import EventList from "../components/EventList";
const Events = () => {
	return (
		<div className="bg-[#fafafb] p-8 min-h-[100vh]  dark:bg-[#141D26] dark:text-white">
			<div className="flex items-center justify-between">
				<h4 className="underline underline-offset-8 decoration-2 decoration-[#A060FF] font-bold text-xl">
					Your Invites
				</h4>
				<Link to=".">View All</Link>
			</div>
			<div>
				<EventList/>
			</div>
		</div>
	);
};

export default Events;
