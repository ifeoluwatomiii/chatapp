import lamp from "../assets/productimage.jpg";
import { BsCartPlus } from "react-icons/bs";
import sellerImage from "../assets/friend1.png";

const ProductCard = () => {
	return (
		<div className="p-3 bg-white rounded-2xl dark:bg-[#15202B] flex flex-col  gap-3 relative">
			<div className="flex justify-center items-center ">
				<img
					src={lamp}
					alt=""
					className="w-full h-[300px] object-cover object-top rounded-xl"
				/>
				<img src={sellerImage} alt="" className="rounded-full absolute w-[52px] h-[52px] object-cover object-top border-2 border-[#A060FF] shadow-md left-5 top-5 cursor-pointer hover:scale-110 transition-all duration-200 ease-in"/>
			</div>

			<div className="bg-[#F6F6F6] p-4 rounded-2xl dark:bg-[#141D26]">
				<div className="flex items-center gap-4 justify-between bg-white rounded-xl p-4 dark:bg-[#15202B]">
					<div className="dark:text-white">
						<h3 className="font-bold text-xl">The Lamp 330</h3>
						<p>The 330 version</p>
						<h4 className="font-bold text-xl">$10.00</h4>
					</div>
					<div className=" rounded-full bg-black p-3 dark:bg-[#A060FF] cursor-pointer hover:scale-110 transition-all duration-200 ease-in">
						<BsCartPlus className="text-white text-[25px] " />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
