import { combineEpics } from "redux-observable";
import { EpicCustom } from "./epics.interfaces";

export default combineEpics() as unknown as EpicCustom;
