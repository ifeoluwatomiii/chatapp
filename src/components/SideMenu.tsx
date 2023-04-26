import { Navitem } from "../utilies/NavItems";

interface SideMenuProps {
	navitem: Navitem;
}
const SideMenu = ({ navitem }: SideMenuProps) => {
	const { item, Icon, link } = navitem;

	return (
		<div className="flex items-center gap-3 leading-[20px] px-4 py-2 mt-2">
			<Icon />
			<h5>{item}</h5>
		</div>
	);
};

export default SideMenu;
