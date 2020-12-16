import React from "react";
import BStick from "./atoms/BStick";
import { ReducerType } from "../../rootReducer";
import { useSelector } from "react-redux";

const PlayerBlock = () => {
  const { localState } = useSelector((state: ReducerType) => state.tetris);
  return (
    <BStick
      blockType={localState.playerBlock.currentBlock}
      rotation={localState.playerBlock.rotation}
    />
  );
};

export { PlayerBlock };
