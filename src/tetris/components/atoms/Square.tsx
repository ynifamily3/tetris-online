import React from "react";
import styled from "styled-components";

export type BlockColor =
  | "cyan"
  | "lime"
  | "blue"
  | "purple"
  | "yellow"
  | "orange"
  | "red";

const S = styled.div<{ position: number; isDisplay: boolean }>`
  width: 24px;
  height: 24px;
  opacity: ${({ isDisplay }) => (isDisplay ? "1" : "0")};
  background-image: url("./tetris-block-sprite.png");
  background-position: -${({ position }) => position}px 0;
`;

function Square({
  color = "cyan",
  display = false,
}: {
  color?: BlockColor;
  display?: boolean;
}) {
  switch (color) {
    case "cyan":
      return <S position={24 * 0} isDisplay={display} />;
    case "lime":
      return <S position={24 * 1} isDisplay={display} />;
    case "blue":
      return <S position={24 * 2} isDisplay={display} />;
    case "purple":
      return <S position={24 * 3} isDisplay={display} />;
    case "yellow":
      return <S position={24 * 4} isDisplay={display} />;
    case "orange":
      return <S position={24 * 5} isDisplay={display} />;
    case "red":
      return <S position={24 * 6} isDisplay={display} />;
    default:
      return <S position={24} isDisplay={false} />;
  }
}

export default Square;
