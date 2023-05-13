import doc from "../assets/doc.png";
import { RiShareForwardLine } from "react-icons/ri"
import { RxBox } from "react-icons/rx"


const FilesCard = () => {
	return (
		<div className="p-4 bg-white rounded-2xl dark:bg-[#15202B] hover:scale-90 transition-all duration-200 ease-in">
			<div className="flex">
				<div>
				<img className="w-[40%]" src={doc} alt="" />
                <h4 className="text-lg">Linkedin App Design</h4>
                <p className="text-black/60 dark:text-white/60">10MB</p>
				</div>
				
				<div className="flex gap-2">
					<RiShareForwardLine className="cursor-pointer" />
					<RxBox className="cursor-pointer"/>
				</div>
			</div>
            
		</div>
	);
};

export default FilesCard;
