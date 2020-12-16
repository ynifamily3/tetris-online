import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalState {
  score: number;
}

export interface Tetris {
  gamestate: "init" | "start" | "end";
  localState: LocalState;
  multiState: LocalState[];
}

export const tetris = createSlice({
  name: "tetris",
  initialState: {
    gamestate: "init",
  },
  reducers: {
    changeGameState(state, action: PayloadAction<Tetris>) {
      state.gamestate = action.payload.gamestate;
    },
  },
});

export const { changeGameState } = tetris.actions;
export default tetris.reducer;
