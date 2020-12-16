import React from "react";
import { GamePane } from "./GamePane";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 602px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 300px;
  height: 150px;
  font-size: 24pt;
`;

const GamePaneDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const GameRoot = () => {
  return (
    <>
      {/* <Wrapper>
        <Button>시작하기</Button>
      </Wrapper> */}
      <GamePaneDivider>
        <GamePane />
        <div>vs</div>
        <GamePane />
      </GamePaneDivider>
    </>
  );
};

export { GameRoot };
