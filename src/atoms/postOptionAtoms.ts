import {atom} from 'recoil'

const postOptionState = atom<boolean>({
    key: 'postOptionState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });


  export default postOptionState