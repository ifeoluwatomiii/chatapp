import lamp from "../assets/productimage.jpg";
import { HiShoppingCart } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = () => {
	return (
		<div className="p-3 bg-white rounded-2xl dark:bg-[#15202B] flex flex-col  gap-3">
			<div className="flex justify-center items-center ">
				<img src={lamp} alt="" className="w-full h-[300px] object-cover object-top rounded-xl" />
			</div>

			<div className="bg-[#F6F6F6] p-4 rounded-2xl dark:bg-[#141D26]">
				<div className="flex items-center gap-4 justify-between bg-white rounded-xl p-4 dark:bg-[#15202B]">
					<div className="dark:text-white">
						<h3 className="font-bold text-xl">The Lamp 330</h3>
						<p>The 330 version</p>
						<h4 className="font-bold text-xl">$10.00</h4>
					</div>
					<div className=" rounded-full bg-black p-3 dark:bg-[#A060FF]">
						<BsCartPlus className="text-white text-[25px] " />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
