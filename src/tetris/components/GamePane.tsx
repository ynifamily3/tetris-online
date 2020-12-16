import React from "react";
import styled from "styled-components";
import BStick from "./atoms/BStick";
import { PlayerBlock } from "./PlayerBlock";
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
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NextBox = styled.div`
  /* background-color: black; */
  width: ${24 * 4}px;
`;

// cyan lime  blue purple yellow orange red
const GamePane = () => {
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
        {/* <PlayerBlock blockType="T" rotation={0} r={5} c={0} /> */}
      </InShell>
    </AppShell>
  );
};

export { GamePane };
