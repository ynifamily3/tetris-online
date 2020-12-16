import { combineReducers } from "@reduxjs/toolkit";
import tetris from "./slices/tetris";

const reducer = combineReducers({
  tetris,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
