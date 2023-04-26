import headshot from "../assets/headshot.jpg";
import navitems from "../utilies/NavItems";
import SideMenu from "../components/SideMenu";



const Dashboard = () => {
	return (
		<div className="py-8 px-4">
			<div className="flex gap-3 items-center">
				<img className="w-[50px] rounded-full h-[50px] " src={headshot} alt="" />
				<div>
					<h3>Aisha Johnson</h3>
					<p className="text-[#1414]">@aisha_johnson</p>
				</div>
			</div>
            <div>
				{
					navitems.map((navitem)=>{
						return(
							<SideMenu navitem={navitem}/>
						)
					})
				}
			</div>
		</div>
	);
};

export default Dashboard;
