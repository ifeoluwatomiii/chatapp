import headshot from "../assets/headshot.jpg";

const Profile = () => {
	return (
		<div className="flex gap-3 items-center dark:text-white">
			<img
				className="w-[50px] rounded-full h-[50px] object-cover object-top"
				src={headshot}
				alt=""
			/>
			<div className="dark:text-white">
				<h3 className="font-bold text-xl">Aisha Johnson</h3>
				<p className="text-black/60 dark:text-white/60">@aisha_johnson</p>
			</div>
		</div>
	);
};

export default Profile;
