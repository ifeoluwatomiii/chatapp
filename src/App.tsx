import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Friends from "./pages/Friends";
import Events from "./pages/Events";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import Files from "./pages/Files";
import Market from "./pages/Market";
import { useRecoilValue } from "recoil";
import toggleModeState from "./atoms/toggleModeAtom";

const App = () => {
	const toggleDarkMode = useRecoilValue(toggleModeState);
	return (
		<div className={`${!toggleDarkMode ? "dark" : null}`}>
			<div className="dark:bg-[#15202b] bg-white ">
				<Navbar />
				<div className="font-Ysabeau container max-w-[1400px] mx-auto ">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/dashboard" element={<Dashboard />}>
							<Route path="feed" element={<Feed />} />
							<Route path="friends" element={<Friends />} />
							<Route path="events" element={<Events />} />
							<Route path="videos" element={<Videos />} />
							<Route path="photos" element={<Photos />} />
							<Route path="files" element={<Files />} />
							<Route path="market" element={<Market />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
