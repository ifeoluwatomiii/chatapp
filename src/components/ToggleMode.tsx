import { useRecoilState } from "recoil";
import toggleModeState from "../atoms/toggleModeAtom";

import { DarkModeSwitch } from "react-toggle-dark-mode";

const ToggleMode = () => {
	const [isToggled, setIsToggled] = useRecoilState(toggleModeState);
	const toggleDarkMode = (checked: boolean) => {
		setIsToggled(checked);
	};

	console.log(isToggled);
	return (
		<div>
			<DarkModeSwitch
				checked={isToggled}
				onChange={toggleDarkMode}
				size={25}
				moonColor="#141D26"
                sunColor="white"
			/>
		</div>
	);
};

export default ToggleMode;
