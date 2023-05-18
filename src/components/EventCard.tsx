import meeting from "../assets/meeting.jpg";
import { WiTime7 } from "react-icons/wi";
import { MdOutlineLocationOn } from "react-icons/md";

const EventCard = () => {
	return (
		<div className="p-3 bg-white rounded-2xl dark:bg-[#15202B] flex flex-col gap-3 mt-8 w-full">
			<div>
				<img className="w-full h-[200px] object-cover object-top rounded-xl" src={meeting} alt="group meeting" />
			</div>
			<>
				<h4 className="text-center font-bold text-lg mt-2">Enterpreneurship Events</h4>
			</>
			<div className="flex items-center justify-between px-2 mt-4">
				<div className="">
					<div className="flex items-center gap-2">
						<WiTime7 />
						<h4>Friday 4 - 5 PM</h4>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<MdOutlineLocationOn />
						<h4>Radission Blu, Dwarka</h4>
					</div>
				</div>
                <>
                    <h4>May <br /> 25th</h4>
                </>
			</div>
            <div className="flex justify-center gap-10 items-center mt-4">
                <button className="border py-2 px-8 rounded-lg border-green-600 text-green-500 hover:bg-green-300 hover:text-black">Accept</button>
                <button className="border py-2 px-8 rounded-lg border-red-600 text-red-500 hover:bg-red-300 hover:text-black">Reject</button>
            </div>
		</div>
	);
};

export default EventCard;
