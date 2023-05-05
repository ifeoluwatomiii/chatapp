import friend1 from "../assets/friend1.png";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import smiley from "../assets/smileyface.jpg";
import snoopy from "../assets/snoopy.jpg";

const Friends = () => {
	return (
		<div className="bg-[#fafafb] p-8 min-h-[100vh]  dark:bg-[#141D26]">
			<div className="shadow-md p-4  dark:bg-[#15202b] dark:text-white">
				<div className="text-xl">
					<h4 className="font-bold text-2xl">Friends</h4>
				</div>
				<div className="mt-4 text-lg">
					<div className="flex items-center gap-3">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-top "
							src={friend1}
							alt=""
						/>
						<p>Cheri Susan</p>
					</div>
					<div className="flex items-center gap-3 mt-4">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-center "
							src={friend2}
							alt=""
						/>
						<p>Danny Muri</p>
					</div>
					<div className="flex items-center gap-3 mt-4">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-top "
							src={friend3}
							alt=""
						/>
						<p>Abike Ademide</p>
					</div>
					<div className="flex items-center gap-3 mt-4">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-top "
							src={friend1}
							alt=""
						/>
						<p>Susan Susan</p>
					</div>
					<div className="flex items-center gap-3 mt-4">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-center border-2 border-[#A060FF] "
							src={friend2}
							alt=""
						/>
						<p>Dante</p>
					</div>
					<div className="flex items-center gap-3 mt-4">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-top border-2 border-[#A060FF] border-solid"
							src={snoopy}
							alt=""
						/>
						<p>Jaxvier</p>
					</div>
					<div className="flex items-center gap-3 mt-4">
						<img
							className="w-[50px] rounded-full h-[50px] object-cover object-center border-2 border-[#A060FF]"
							src={smiley}
							alt=""
						/>
						<p>Smiley Face</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Friends;
