import React from "react";
import styled from "styled-components";
import BStick from "./atoms/BStick";
import { PlayerBlock } from "./PlayerBlock";
import { ReducerType } from "../../rootReducer";
import { useSelector } from "react-redux";
// import {} from "../../slices/tetris";

const AppShell = styled.div`
  min-width: 400px;
  min-height: ${24 * 22}px;
  border: 1px solid black;
  position: relative;
`;
const StatusPane = styled.div`
  position: absolute;
  width: 112px;
  right: 0;
  top: 24px;
  box-sizing: border-box;
  padding-left: 8px;
`;
const InShell = styled.div`
  width: ${24 * 12}px;
  height: ${24 * 22}px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 24px solid rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NextBox = styled.div`
  width: ${24 * 4}px;
`;

const GamePane = () => {
  const { localState } = useSelector((state: ReducerType) => state.tetris);
  return (
    <AppShell>
      <StatusPane>
        <div>닉네임</div>
        <div>점수: 0</div>
        <div>Next: </div>
        <NextBox>
          <BStick blockType="T" />
        </NextBox>
        <div>Hold: </div>
        <NextBox>
          <BStick blockType="Z" />
        </NextBox>
      </StatusPane>
      <InShell>
        <PlayerBlock />
      </InShell>
    </AppShell>
  );
};

export { GamePane };
