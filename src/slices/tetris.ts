import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockType } from "../tetris/components/atoms/BStick";
import { getBlockArea, getBlockMaxRotation } from "../utils/tetrisUtil";

interface LocalState {
  score: number;
  playerBlock: {
    currentBlock: BlockType;
    r: number;
    c: number;
    rotation: number;
    axis: number; // 회전축 (I의 경우 2,1,2,1...)
  };
  // 플레이어 상태 개입 전의 pane
  pane: number[][];
}

export interface Tetris {
  gamestate: "init" | "start" | "end";
  tick: number;
  localState: LocalState;
  multiState?: LocalState[];
}

const initialState: Tetris = {
  gamestate: "init",
  tick: 0,
  localState: {
    score: 0,
    playerBlock: {
      currentBlock: "I",
      r: 0,
      c: 0,
      rotation: 1,
      axis: 2,
    },
    pane: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
};

export const tetris = createSlice({
  name: "tetris",
  initialState,
  reducers: {
    changeGameState(state, action: PayloadAction<Tetris>) {
      state.gamestate = action.payload.gamestate;
    },
    tick(state) {},
    pressLeft(state) {
      // 왼쪽으로 이동하는 명령
      if (state.localState.playerBlock.c > 0) state.localState.playerBlock.c--;
    },
    pressRight(state) {
      // 오른쪽으로 이동하는 명령
      const { c } = getBlockArea(
        state.localState.playerBlock.currentBlock,
        state.localState.playerBlock.rotation
      );
      if (state.localState.playerBlock.c < 10 - c)
        state.localState.playerBlock.c++;
    },
    pressUp(state) {
      // 미노 회전 명령
      const rt = state.localState.playerBlock.rotation + 1;
      if (
        rt >= getBlockMaxRotation(state.localState.playerBlock.currentBlock)
      ) {
        state.localState.playerBlock.rotation = 0;
      } else {
        state.localState.playerBlock.rotation = rt;
      }
      state.localState.playerBlock.c += state.localState.playerBlock.axis;
      if (state.localState.playerBlock.axis === 2)
        state.localState.playerBlock.axis = 1;
      else state.localState.playerBlock.axis = 2;
    },
  },
});

export const {
  changeGameState,
  tick,
  pressLeft,
  pressRight,
  pressUp,
} = tetris.actions;
export default tetris.reducer;
