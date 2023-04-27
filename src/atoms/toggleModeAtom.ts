import {atom} from 'recoil'

const toggleModeState = atom<boolean>({
    key: 'toggleModeState', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
  });


  export default toggleModeState