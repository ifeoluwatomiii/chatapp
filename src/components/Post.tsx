import headshot from "../assets/headshot.jpg";
import { TbPhotoEdit } from "react-icons/tb";
import { RxImage } from "react-icons/rx";

const Post = () => {
	return (
		<div className="divide-y rounded-lg py-4 bg-white shadow-md dark:bg-[#15202B] dark:divide-[#38444d]">
			<div className="px-5 py-3 ">
				<h4 className="font-bold dark:text-white">Post Something</h4>
			</div>
			<div className="flex items-center justify-between gap-4 px-5 py-3">
				<div className="w-[10%]">
					<img
						className="w-[50px] rounded-full h-[50px] object-cover object-top "
						src={headshot}
						alt=""
					/>
				</div>

				<textarea
					className=" w-full !outline-none max-h-[70px] min-h-[70px] dark:bg-[#273347] rounded-md px-2 pt-2 dark:text-white "
					placeholder="What's on your mind?"
					rows={1}
					cols={1}></textarea>

				<div>
					<RxImage className="text-2xl text-black/50 dark:text-white/70" />
				</div>
			</div>
		</div>
	);
};

export default Post;
