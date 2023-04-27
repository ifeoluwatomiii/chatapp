import snoopy from "../assets/snoopy.jpg";
import { RiMoreLine } from "react-icons/ri";
import eyes from "../assets/Eyes.jpg";
import instagram from "../assets/Instagram.jpg";
import PostReactions from "./PostReactions";
import PostComment from "./PostComment";
import PostOptions from "./PostOptions";
import { useRecoilState } from "recoil";
import postOptionState from "../atoms/postOptionAtoms";

const PostFeed = () => {
	const [postOption, setPostOption] = useRecoilState(postOptionState);
	return (
		<div className=" mt-8 rounded-lg bg-white  flex flex-col divide-y shadow-md dark:bg-[#15202b] dark:text-white dark:divide-[#38444d]">
			<div className="px-5  flex flex-col divide-y dark:divide-[#38444d]">
				<div>
					<div className="flex items-center justify-between py-4 relative">
						<div className="flex items-center gap-3">
							<img
								className="w-[50px] rounded-full h-[50px] object-cover object-top"
								src={snoopy}
								alt=""
							/>

							<div>
								<h3 className="font-bold text-xl">Jaxvier</h3>
								<p className="text-black/60 dark:text-white/50">12 April at 09:34 PM</p>
							</div>
						</div>

						<div className="cursor-pointer">
							<RiMoreLine
								onClick={() => {
									setPostOption(!postOption);
								}}
							/>
						</div>
						<div className="absolute right-0 top-[60px]">
							<PostOptions />
						</div>
					</div>
					<div className="">
						<p>
							One of the perks of being a freelance artist is that i have time
							to create my art any time i want.
						</p>
					</div>
					<div className="flex items-center justify-center gap-4 py-4 ">
						<img className="w-[50%] rounded-lg" src={eyes} alt="" />
						<img className="w-[50%] rounded-lg" src={instagram} alt="" />
					</div>
				</div>
				<div>
					<PostReactions />
				</div>
			</div>
			<div className="px-5">
				<PostComment />
			</div>
		</div>
	);
};

export default PostFeed;
