import React from "react";
import styled from "styled-components";
import Square, { BlockColor } from "./Square";
export type BlockType = "I" | "J" | "L" | "O" | "S" | "Z" | "T";
const BlockTypeObj: { [key: string]: [number, BlockColor] } = {
  I: [0, "cyan"],
  J: [1, "blue"],
  L: [2, "orange"],
  O: [3, "yellow"],
  S: [4, "lime"],
  Z: [5, "red"],
  T: [6, "purple"],
};
const BWrapper = styled.div`
  /* background-color: rgba(0, 0, 0, 0.5); */
  width: ${24 * 4}px;
  height: ${24 * 4}px;
  display: flex; /* grid */
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  width: ${24 * 4}px;
  height: 24px;
`;

// 4차원 배열로..
const blockFlag = [
  [
    [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
  ],
  [
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
];
/*
I 미노: 소위 말하는 작대기. 지정 색깔은 시안.
J 미노: L 미노를 대칭시키면 나오는 테트리미노. 지정 색깔은 파랑색.
L 미노: J 미노를 대칭시키면 나오는 테트리미노. 지정 색깔은 주황색.
O 미노: 2×2 정사각형 모양의 테트리미노. 지정 색깔은 노랑색.
S 미노: Z 미노를 대칭시키면 나오는 테트리미노. 지정 색깔은 라임.
Z 미노: S 미노를 대칭시키면 나오는 테트리미노. 지정 색깔은 빨강색.
T 미노: T스핀을 할 때 쓰이는 테트리미노. 지정 색깔은 자주색.
*/
const BStick = ({
  blockType = "I",
  rotation = 0,
}: {
  blockType?: BlockType;
  rotation?: number;
}) => {
  let color = BlockTypeObj[blockType][1];
  let blockNumber = BlockTypeObj[blockType][0];
  return (
    <BWrapper>
      {blockFlag[blockNumber][rotation].map((x, i) => {
        const cols = x.map((y, j) => {
          return (
            <Square
              key={"squareElement-" + i + "-" + j}
              color={color}
              display={y === 1}
            />
          );
        });
        return <Row key={"rowElement-" + i}>{cols}</Row>;
      })}
    </BWrapper>
  );
};

export default BStick;
