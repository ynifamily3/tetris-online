import React from "react";
import styled from "styled-components";
import BStick from "./atoms/BStick";

const AppShell = styled.div`
  min-width: 400px;
  min-height: 600px;
  border: 1px solid black;
`;
// cyan lime  blue purple yellow orange red
const GamePane = () => {
  return (
    <AppShell>
      <div>닉네임</div>
      <div>점수: 0</div>
      <div>Next: </div>
      <BStick blockType="I" rotation={0} />
      <BStick blockType="J" rotation={0} />
      <BStick blockType="L" rotation={0} />
      <BStick blockType="O" rotation={0} />
      <BStick blockType="S" rotation={0} />
      <BStick blockType="Z" rotation={0} />
      <BStick blockType="T" rotation={0} />
    </AppShell>
  );
};

export { GamePane };
