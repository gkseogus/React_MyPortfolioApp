// atom.js
import { atom } from "recoil";

let dropDownState = atom({
  key: "dropDownState",
  default: "en",
});

export default dropDownState;
