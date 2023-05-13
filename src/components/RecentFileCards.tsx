import doc from "../assets/doc.png";
import googlesheet from "../assets/googlesheet.png";
import pdf from "../assets/pdf.png";

const RecentFileCards = () => {
	return (
		<div className="flex mb-8 p-4 bg-white rounded-2xl dark:bg-[#15202B] divide-x">
			<div className="flex items-center gap-4">
				<>
					<img className="w-[15%]" src={doc} alt="" />
				</>
				<div>
					<h4>Linkedin App</h4>
					<p>10MB</p>
				</div>
			</div>
            <div className="flex items-center gap-4 px-2">
				<>
					<img className="w-[13%]" src={googlesheet} alt="" />
				</>
				<div>
					<h4>Linkedin App</h4>
					<p>10MB</p>
				</div>
			</div>
            <div className="flex items-center gap-4 px-2">
				<>
					<img className="w-[12%]" src={pdf} alt="" />
				</>
				<div>
					<h4>Linkedin App</h4>
					<p>10MB</p>
				</div>
			</div>
		</div>
	);
};

export default RecentFileCards;
