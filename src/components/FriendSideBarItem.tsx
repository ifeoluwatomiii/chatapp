
import smiley from "../assets/smileyface.jpg";

const FriendSideBarItem = () => {
	return (
		<div className="flex items-center gap-3 mt-4">
            <div>
            <img
				className="w-[50px] rounded-full h-[50px] object-cover object-center border-2 border-[#A060FF]"
				src={smiley}
				alt=""
			/>
            </div>
			<div>
            <h3>Smiley Face</h3>
            <p className="text-black/60 dark:text-white/60 text-sm">@iam_smiley</p>
            </div>
			
		</div>
	);
};

export default FriendSideBarItem;
