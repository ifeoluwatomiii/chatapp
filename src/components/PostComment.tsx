import headshot from "../assets/headshot.jpg";
import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { RxImage } from "react-icons/rx";

const PostComment = () => {
	return (
		<div className="flex items-center justify-between gap-2 py-4">
			<div className="w-[10%]">
				<img
					src={headshot}
					alt=""
					className="w-[50px] h-[50px] object-cover object-top rounded-full"
				/>
			</div>
			<div className="flex items-center bg-[#FAFAFB] w-full justify-between px-4 border rounded-xl dark:bg-[#273347] dark:border-[#1b3044]">
				<input type="text" className="bg-transparent  w-[80%] !outline-none h-[40px]" placeholder="write your comment..."/>
				<div className="flex items-center gap-3 text-black/50 text-xl w-[20%] justify-end dark:text-white/70">
					<ImAttachment />
					<GrEmoji />
					<RxImage />
				</div>
			</div>
		</div>
	);
};

export default PostComment;
