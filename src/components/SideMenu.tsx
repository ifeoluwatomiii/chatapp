import { Navitem } from "../utilies/NavItems";
import { NavLink } from "react-router-dom";

interface SideMenuProps {
	navitem: Navitem;
}
const SideMenu = ({ navitem }: SideMenuProps) => {
	const { item, Icon, link } = navitem;

	return (
		<NavLink to={link}>
			<div className="flex items-center gap-3 leading-[20px] px-4 py-2 mt-2 dark:text-white text-xl">
				<Icon />
				<h5>{item}</h5>
			</div>
		</NavLink>
	);
};

export default SideMenu;
