import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  storage: window.localStorage,
  key: "recoilToggleMode",
});

const toggleModeState = atom<boolean>({
  key: "toggleModeState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export default toggleModeState;
