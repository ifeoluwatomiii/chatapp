import React from "react";
import { RiFlag2Line } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import postOptionState from "../atoms/postOptionAtoms";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineBlock } from "react-icons/md";
import { BiVolumeMute } from "react-icons/bi";

const PostOptions = () => {
	const isOpen = useRecoilValue(postOptionState);

	return (
		<div>
			{isOpen ? (
				<div className="flex flex-col divide-y justify-center items-center bg-white shadow-xl rounded-md dark:bg-[#15202B] w-[250px] dark:divide-[#38444d] dark:shadow-md dark:shadow-[#273347] dark:border-[#38444d] dark:border">
					<div className="flex items-center justify-between  gap-3 py-3 px-5 w-full">
						<div>
							<p>Follow @Jaxvier</p>
						</div>
						<div>
							<AiOutlineUserAdd />
						</div>
					</div>
					<div className="flex items-center justify-between  gap-3 py-3 px-5 w-full">
						<div>
							<p>Mute @Jaxvier</p>
						</div>
						<div>
							<BiVolumeMute />
						</div>
					</div>
					<div className="flex items-center justify-between gap-3 py-3 px-5 w-full">
						<div>
							<p>Block @Jaxvier</p>
						</div>
						<div>
							<MdOutlineBlock />
						</div>
					</div>
					<div className="flex items-center justify-between  gap-3 py-3 px-5 w-full">
						<div>
							<p>Report @Jaxvier</p>
						</div>
						<div>
							<RiFlag2Line />
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PostOptions;
