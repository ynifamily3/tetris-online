import React from "react";
import styled from "styled-components";

const AppShell = styled.div`
  min-width: 400px;
  min-height: 600px;
  border: 1px solid black;
`;

const GamePane = () => {
  return (
    <AppShell>
      <div>닉네임</div>
      <div>점수: 0</div>
      <div>Next: ㄴ</div>
    </AppShell>
  );
};

export { GamePane };
