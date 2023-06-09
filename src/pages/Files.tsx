import { CiSearch } from "react-icons/ci";
import FilesCard from "../components/FilesCard";
import RecentFileCards from "../components/RecentFileCards";

const Files = () => {
	return (
		<div className="bg-[#fafafb] p-8 min-h-[100vh]  dark:bg-[#141D26] dark:text-white">
			<div className="border rounded-lg px-2 flex items-center py-2  dark:bg-[#273347] dark:border-[#1b3044] w-[50%]">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="search here"
					className="w-[400px] !outline-none dark:bg-transparent dark:text-white w-full"
				/>
				<CiSearch className="text-2xl dark:text-white w-[10%]" />
			</div>

			<div className="mb-4 py-4">
				<h3 className="font-bold text-xl">Recent Files</h3>
			</div>
			<div>
				<RecentFileCards/>
			</div>
			<h3 className="font-bold text-xl mb-4">Files</h3>
			<div className="grid grid-cols-3 gap-6">
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				<FilesCard />
				
			</div>
		</div>
	);
};

export default Files;
