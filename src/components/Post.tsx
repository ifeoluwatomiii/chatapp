import headshot from "../assets/headshot.jpg";
import { RxImage } from "react-icons/rx";
import { BsEmojiSmile } from "react-icons/bs";
import { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useRecoilValue } from "recoil";
import toggleModeState from "../atoms/toggleModeAtom";

const Post = () => {
	const [post, setPost] = useState("");
	const [showEmoji, setShowEmoji] = useState(false);
	const darkMode = useRecoilValue(toggleModeState);

	const addEmoji = (e: { unified: string }) => {
		const sym = e.unified.split("-");
		const codesArray: any[] = [];
		sym.forEach((el: string) => codesArray.push("0x" + el));
		const emoji = String.fromCodePoint(...codesArray);
		setPost(post + emoji);
	};

	return (
		<div className="divide-y rounded-lg py-4 bg-white shadow-md dark:bg-[#15202B] dark:divide-[#38444d]">
			<div className="px-5 py-3 ">
				<h4 className="font-bold dark:text-white">Post Something</h4>
			</div>
			<div className="flex items-start justify-between gap-4 px-5 py-3">
				<div className="w-[10%]">
					<img
						className="w-[50px] rounded-full h-[50px] object-cover object-top "
						src={headshot}
						alt=""
					/>
				</div>
				<div className="flex flex-col items-end w-full gap-3">
					<textarea
						className=" w-full !outline-none max-h-[70px] min-h-[70px] dark:bg-[#273347] rounded-md px-2 pt-2 dark:text-white "
						placeholder="What's on your mind?"
						rows={1}
						cols={1}
						value={post}
						onChange={(e) => setPost(e.target.value)}></textarea>
					{post.length == 0 ? (
						<button
							className="bg-[#7042b6] text-white font-bold py-1 px-8 rounded-md "
							disabled>
							POST
						</button>
					) : (
						<button className="bg-[#A060FF] text-white font-bold py-1 px-8 rounded-md">
							POST
						</button>
					)}
				</div>

				<div className="relative flex flex-col gap-2">
					<RxImage className="text-2xl cursor-pointer text-black/50 dark:text-white/70" />
					<BsEmojiSmile
						className="text-2xl cursor-pointer text-black/50 dark:text-white/70"
						onClick={() => {
							setShowEmoji(!showEmoji);
						}}
					/>
					{showEmoji && (
						<div className="absolute right-0 z-20 top-16">
							<Picker
								data={data}
								onEmojiSelect={addEmoji}
								theme={`${darkMode ? "light" : "dark"}`}
								/*   onClickOutside={() => {
                  setShowEmoji(!showEmoji);
                }} */
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Post;
